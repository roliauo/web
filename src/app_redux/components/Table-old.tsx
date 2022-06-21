import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
//import AppContext from '@settings/components/AppContext';


/* interface */
interface Props {
    tableKey: any;
    columnSettingArr: ColumnSetting[];
    list: ISinglePolygonData[];
    searchLetter: string;
    activeRowData: any;
    selections: any[];
    maxHeight?: string;
    updateSelections: (rowData: any[]) => void;
    updateActiveRow: (rowData: any) => void;
}

interface ISinglePolygonData{
    name: string;
    id: number;
    key: string;
    path?: string[];
    parentId?: number;
    isCategory: boolean;
    tableKey: any;
    items: any;
}

interface PropsTableBodyContainer {
    disabled: boolean;
    maxHeight: string;
}

interface PropsTableRow {
    isFocused: boolean;
    show: boolean;
    subItemLevel: number;
    hasExpandingIcon: boolean;
}


interface ColumnSetting {
    colKey: string;
    name: string;
}

interface ListData {
    id: any;
    name: string;
    items?: ListData[];
    [x: string]: any;
}

/* styled-components */
const Table = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: inherit;
    overflow: hidden;
    position: relative;
`;

const TableHead = styled.header`
    display: flex;
    flex: 0 0 36px;
    width: 100%;
    padding: 0 2px;
    font-size: 14px;
    font-weight: 600;
    line-height: 36px;
`;

const TableHeadItem = styled.div`
    flex: 1 1;
    padding: 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const TableHeadCheckbox = styled.div`
    display: flex;
    flex: 0 0 40px;
    > i {
        font-size: 16px;
        margin: auto;
        &:before {
            width: auto;
        }
    }
`;

const TableBodyContainer = styled.div`
    width: 100%;
    max-height: ${(props: PropsTableBodyContainer) => props.maxHeight ? props.maxHeight : 'inherit'};
    flex: 1 1 auto;
    padding: 16px 2px;
    border-radius: 8px;
    background-color: var(--white-one);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
    overflow-y: auto;
    transition: max-height .5s;
    ${(props: PropsTableBodyContainer) => props.disabled ?
        `
            background-color: transparent;
            pointer-events: none;
            box-shadow: none;
        `
        : ''
    };
`;

const TableBody = styled.div`   //styled.table
    table-layout: fixed;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0px;
`;

const TableRow = styled.div`
    // display: flex;
    padding-left: ${(props: PropsTableRow) => props.subItemLevel * 40}px;
    display: grid;
    // grid-auto-columns: ${(props: PropsTableRow) => props.hasExpandingIcon || props.subItemLevel === 0 ? '36px ' : ''}36px 1fr 1fr;
    grid-auto-columns: 36px 36px auto;
    grid-auto-flow: column;
    height: ${(props: PropsTableRow) => props.show ? '42px' : 0};
    overflow: hidden;
    line-height: 42px;
    color: var(--table-font-active);
    font-size: 14px;
    font-weight: 500;
    &:hover {
        background-color: rgba(115, 166, 63, 0.1);
    }
    box-shadow: 0 1px 0 0 var(--white-two);
    transition: .5s;

    ${(props: PropsTableRow) => props.isFocused ?
        `
            font-weight: 600;
            box-shadow: 0 0 0 2px var(--themeColor);
            border-radius: 8px;
            > td {
                background-color: #ffffff;
            }
            > td:first-child {
                border-radius: 8px 0 0 8px;
            }
            > td:last-child {
                border-radius: 0 8px 8px 0;
            }
        `
        : ''
    };
`;

const TableCell = styled.div`
    display: inline-block;
    height: 42px;
    width: ${(props: { width?: string }) => props.width || '40px'};
    padding: 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    > i {
        font-size: 16px;
        &:before {
            width: auto;
        }
    }
`;

const TableCellGrid = styled.div`
    display: inline-grid;
    width: 100%;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    padding: 0 .5rem;
    div {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const ExpandingIcon = styled.div`
    i:: before {
        transform: ${(props: { expanding: boolean }) => props.expanding ? 'rotate(90deg)' : 'unset'};
        transition: .5s;
    }

`;



export default function (props: Props) {
    //const { isEditting } = useContext(AppContext);
    const isEditting = false;
    const [expandingRowDatas, setExpandingRowDatas] = useState([]);

    function getCheckboxClassName(selections: any[], list: any[]) {
        const items = getItems(list);

        if (isEditting) return 'empty';
        else if (selections.length === 0) {
            return 'icon-checkbox_uncheck';
        }
        else if (selections.length < items.length) {
            return 'icon-checkbox_somechecked';
        }
        else if (selections.length === items.length) {
            return 'icon-checkbox_checked';
        }
    }

    function filterList(itemList = []) {
        const colKeys = props.columnSettingArr.map((setting) => setting.colKey);
        const result = [];
        itemList.forEach((item) => {
            if (item.items && item.items.length > 0) {
                const filteredChildren = filterList(item.items);
                if (filteredChildren.length > 0) {
                    result.push({
                        ...item,
                        items: filteredChildren,
                    });
                }
            }
            else if (Object.keys(item).some((attr) => {
                if (colKeys.includes(attr) && item[attr] && item[attr].toString) {
                    return item[attr].toLowerCase().includes(props.searchLetter.toLowerCase());
                }
                else return false;
            })
            ) {
                result.push(item);
            }
        });
        return result;
    }

    function getItems(data) {
        let result = [];
        data.forEach((v) => {
            if (v.items && v.items.length) {
                result = result.concat(getItems(v.items));
            } else if (v.isCategory === false) {
                result.push(v);
            }
        })
        return result;
    }

    function handleOnCheckRow(data: ISinglePolygonData, isChecked) {
        props.updateActiveRow(data);
        const items = getItems([data]);
        if (isChecked) {
            const newSelectedRow = props.selections.filter((s) => items.find((v) => v.id === s.id) === undefined)
            props.updateSelections(newSelectedRow);
        }
        else {
            const newSelections = props.selections.concat(items);
            props.updateSelections(newSelections);
        }
    }

    function handleOnClickRow(data) {
        props.updateActiveRow(data);
    }

    function handleOnUpdateExpandingRowDatas(data, remove?: boolean) {
        const expandingArr = expandingRowDatas.concat();
        const dataIndex = expandingArr.findIndex((f) => f.key === data.key);
        function removeSubItems(subItems: any[]) {
            subItems.map((item) => {
                if (item.items) {
                    removeSubItems(item.items);
                }
                const itemIndex = expandingArr.findIndex((f) => f.key === item.key);
                if (itemIndex > -1) {
                    expandingArr.splice(itemIndex, 1);
                }
            })
        }
        if (dataIndex > -1) {
            if (data.items) {
                removeSubItems(data.items)
            }
            expandingArr.splice(dataIndex, 1);
        } else {
            expandingArr.push(data);
        }
        setExpandingRowDatas(expandingArr);
    }

    function generateTreeData(varList: ISinglePolygonData[]) {
        const filteredList = props.searchLetter.length ? filterList(varList) : varList;
        const res = filteredList.map((data) => {
            if (data.items) {
                data.children = generateTreeData(data.items) // data.items.concat();

            }
            if (data.checked === undefined) data.checked = false;
            delete data.items;
            return data;
        })
        return res;
    }

    function checkIsCategory(item:{isCategory?:boolean,items?:ISinglePolygonData[]}):boolean {
        return (
            item.isCategory &&
            item.items &&
            item.items.length > 0)
    }
    function generateTableRows(list: ISinglePolygonData[], subItemLevel: number, path?: string[], parentId?: number, show?: boolean) {
        return list.map((data, rowIndex) => {
            const isChecked = checkIsCategory(data) ? // check is a category or not
                props.selections.some((s) => s.path.includes(data.name)) :
                props.selections.some((s) => s.id === data.id);
            const key = `${props.tableKey}-${rowIndex}-${data.id}`;
            data.key = key;
            data.path = path || [];
            data.parentId = parentId || 0;
            data.tableKey = props.tableKey;
            const expandingFlag = data.items && expandingRowDatas.find((f) => f.key === data.key);
            const isFocused = (props.activeRowData.id === data.id && props.activeRowData.isCategory === data.isCategory && props.activeRowData.name === data.name);
            // if (isFocused) props.updateActiveRow(data); // for getting path, category
            // JSON.stringify(props.activeRowData) === JSON.stringify(data);

            return (
                <React.Fragment key={key}>
                    <TableRow
                        key={key}
                        isFocused={isFocused}
                        show={show || subItemLevel === 0}
                        subItemLevel={subItemLevel}
                        hasExpandingIcon={data.items && data.items.length > 0}
                    >

                        <TableCell>
                            {
                                !isEditting &&
                                <i
                                    className={(data.items) ? getCheckboxClassName(props.selections.filter((f) => f.path.includes(data.name)), [data]) :
                                        isChecked ? 'icon-checkbox_checked' : 'icon-checkbox_uncheck'}
                                    onClick={() => handleOnCheckRow(data, isChecked)}
                                />
                            }
                        </TableCell>

                        {
                            data.items && data.items.length > 0 ?
                                <TableCell
                                    key={`expandingIcon-${key}`}
                                    onClick={() => handleOnUpdateExpandingRowDatas(data)}
                                >
                                    <i
                                        className={classnames('', {
                                            'icon-expand_4': !expandingFlag,
                                            'icon-collapse_4': expandingFlag,
                                        })}
                                    />

                                </TableCell>
                                :
                                <TableCell />
                        }

                        <TableCellGrid
                            // width={`calc(100% - ${data.items ? subItemLevel + 2 : subItemLevel + 1} * 40px)`}
                        >
                            {
                                props.columnSettingArr.map((column, i) => {
                                    return (
                                        <div
                                            key={i}
                                            onClick={() => handleOnCheckRow(data, isChecked)}
                                            title={data[column.colKey]}
                                        >
                                            {data[column.colKey]}
                                        </div>
                                    );
                                })
                            }
                        </TableCellGrid>


                    </TableRow>
                    {
                        (data.items && data.items.length) &&
                        generateTableRows(data.items, subItemLevel + 1, data.path.concat(data.name), data.id, expandingFlag)
                    }
                </React.Fragment>
            );
        });
    }

    function handleOnCheckAll() {
        if (props.selections.length === 0) {
            props.updateSelections(getItems(props.list));
        }
        else {
            props.updateSelections([]);
        }
    }

    return (
        <Table>
            <TableHead>
                <TableHeadCheckbox>
                    <i className={getCheckboxClassName(props.selections, props.list)} onClick={handleOnCheckAll} />
                </TableHeadCheckbox>
                {
                    props.columnSettingArr.map((col, i) => {
                        return (
                            <TableHeadItem title={col.name} key={i}>
                                {col.name}
                            </TableHeadItem>
                        )
                    })
                }
            </TableHead>
            <TableBodyContainer
                disabled={isEditting}
                maxHeight={props.maxHeight ? `calc(${props.maxHeight} - 36px)` : undefined}
                className='scrollbar_gray'
            >
                <TableBody>
                    {generateTableRows(props.searchLetter.length ? filterList(props.list) : props.list, 0, [props.tableKey])}
                </TableBody>
            </TableBodyContainer>
        </Table>
    );
}