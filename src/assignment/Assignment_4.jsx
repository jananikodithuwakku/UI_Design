import { useState } from "react"
import SearchIcon  from "@mui/icons-material/Search"
import "./Assignment_4.css"

export default function Assignment_4() {
    const [theme, setTheme] = useState("dark");

    return(
        <div className="container4" data-theme={theme}>
            <main className="card4">

                <nav className="nav4">
                    <span className="title">
                        {theme === "dark" ? "Dark mode" : "Light mode"}
                    </span>

                    <div className={`toggle ${theme}`}
                    onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                    >
                        <div className="toggle-circle"></div>
                    </div>
                </nav>

                <div className="search-box">
                    <input type="text" placeholder="Search..." />
                    <SearchIcon  className="search-icon"/>
                </div>

                <section className="cards">

                    <div className="info-card">
                        <span className="dot purple"></span>
                        <div className="lines">
                            <div className="line l1"></div>
                            <div className="line l2"></div>
                            <div className="line l3"></div>
                            <div className="line l4"></div>
                        </div>
                    </div>

                    <div className="info-card">
                        <span className="dot yellow"></span>
                        <div className="lines">
                            <div className="line l1"></div>
                            <div className="line l2"></div>
                            <div className="line l3"></div>
                            <div className="line l4"></div>
                        </div>
                    </div>
                </section>

                <section className="chart">
                    <div className="column"><div className="bar h1"></div></div>
                    <div className="column"><div className="bar h2"></div></div>
                    <div className="column"><div className="bar h3"></div></div>
                    <div className="column"><div className="bar h4"></div></div>
                    <div className="column"><div className="bar h5"></div></div>
                    <div className="column"><div className="bar h6"></div></div>
                    <div className="column"><div className="bar h7"></div></div>
                    <div className="column"><div className="bar h8"></div></div>
                    <div className="column"><div className="bar h9"></div></div>
                </section>
            </main>
        </div>
    );
}