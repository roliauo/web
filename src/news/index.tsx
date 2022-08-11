import React from "react";
import ReactDOM  from "react-dom/client";
import { Provider } from 'react-redux';
import { HashRouter , Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import NewsPage from "./views/containers/NewsPage";
import store from './state/store';
import { NAV_LINKS } from "./constants";



const AppRouter = () => {
    return (
        <HashRouter>
            <Layout>
                {/* <NewsPage/> */}
                <Routes>
                    {
                        NAV_LINKS.map((m, i) =>
                            <Route key={i} path={m.url} element={<NewsPage/>} />
                        )
                    }
                </Routes>
            </Layout>
        </HashRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
