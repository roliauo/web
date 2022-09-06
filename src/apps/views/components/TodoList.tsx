import React, { useRef, useState } from "react";
import styled from "styled-components";

const StyleWrapper = styled.div`

    .btn {
        display: inline-block;
        padding: 0 1rem;
    }

    .todo {
        display: flex;
        align-items: center;
        height: 2rem;
        padding: 1rem;
        border: var(--border-light);

        .item {
            flex-grow: 2;

            &.completed {
                text-decoration: line-through;
                color: #aaa;
            }
        }

        .edit {
            flex-grow: 2;
            height: 100%;
            display: none;
            outline: none;
            border: none;
            &.active {
                display: inline-block;
                background: aliceblue;
            }
        }

        .edit.active + .item {
            display: none;
        }
    }

`

export default function TodoList () {
    const [items, setItems] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>();
    const editRef = useRef<HTMLInputElement[]>([]);

    function onAdd() {
        if (!inputRef.current || !inputRef.current.value.length) return;
        // items.push({
        //     text: inputRef.current.value,
        //     completed: false
        // })
        items.push(inputRef.current.value)
        setItems([...items]);
    }

    function onEdit(index: number) {
        const target = editRef.current[index];
        target.classList.toggle("active");
        target.focus();
        if (target.value.trim().length !== 0 && items[index] !== target.value){
            items[index] = target.value;
            target.value = "";
            setItems([...items]);
        }

    }

    function onDelete(index: number) {
        items.splice(index, 1);
        setItems([...items]);
    }

    function toggleComplete(event: React.MouseEvent<HTMLElement>, index: number) {
        event.currentTarget.classList.toggle("completed");
        // items[index].completed = !items[index].completed;
        // setItems([...items]);
    }

    return (
        <StyleWrapper>
            <input type="text" ref={inputRef} />
            <div className="btn" onClick={() => onAdd()}>
                Create
            </div>
            {
                items.map((m, i) => (
                    <div key={i} className="todo">
                        <input type="text" className="edit" placeholder={m} ref={el => editRef.current[i] = el} />
                        <div className="item" onClick={(e) => toggleComplete(e,i)}>
                            {m}
                        </div>
                        <div className="btn" onClick={() => onEdit(i)}> edit </div>
                        <div className="btn" onClick={() => onDelete(i)}> X </div>
                    </div>
                ))
            }
        </StyleWrapper>
    )
}

