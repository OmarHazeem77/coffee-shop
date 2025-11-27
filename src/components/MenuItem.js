function MenuItem({ name, category, price, image, description, }) {
    return (
        <div className="menuitem">
            <div src={image}></div>
            <h1>{name}</h1>
            <p>{category}</p>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    );
}

export default MenuItem;