import "../styles/Menu.css";
import { ItemsList } from "../data/ItemsList";
import MenuItem from "../components/MenuItem";
import React, { useState } from "react";
const Menu = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [menuItems, setMenuItems] = useState(ItemsList);

    const filterMenu = (category) => {
        setActiveCategory(category);

        if (category === "all") {
            setMenuItems(ItemsList);
        } else {
            const filteredItems = ItemsList.filter(item => item.category === category);
            setMenuItems(filteredItems);
        }
    };

    return (
        <div id="menu" className="page">
            <div className="container">
                <div className="menu-header">
                    <h1>Our Menu</h1>
                    <p>Discover our carefully curated selection of premium beverages and treats</p>
                </div>

                <div className="menu-content">
                    <div className="menu-categories">
                        <button
                            className={`category-btn ${activeCategory === "all" ? "active" : ""}`}
                            onClick={() => filterMenu("all")}
                        >
                            All Items
                        </button>
                        <button
                            className={`category-btn ${activeCategory === "coffee" ? "active" : ""}`}
                            onClick={() => filterMenu("coffee")}
                        >
                            Coffee
                        </button>
                        <button
                            className={`category-btn ${activeCategory === "hotdrinks" ? "active" : ""}`}
                            onClick={() => filterMenu("hotdrinks")}
                        >
                            Hot Drinks
                        </button>
                        <button
                            className={`category-btn ${activeCategory === "pastries" ? "active" : ""}`}
                            onClick={() => filterMenu("pastries")}
                        >
                            Pastries
                        </button>
                        <button
                            className={`category-btn ${activeCategory === "cold" ? "active" : ""}`}
                            onClick={() => filterMenu("cold")}
                        >
                            Cold Drinks
                        </button>
                    </div>

                    <div className="items-grid">
                        {menuItems.map(MenuItem => (
                            <div key={MenuItem.id} className="menu-item">
                                <div className="item-image">
                                    <img src={MenuItem.image} alt={MenuItem.name} />
                                </div>
                                <div className="item-info">
                                    <h3 className="item-name">{MenuItem.name}</h3>
                                    <p className="item-description">{MenuItem.description}</p>
                                    <div className="item-price">${MenuItem.price.toFixed(2)}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;