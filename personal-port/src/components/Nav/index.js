import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(props) {
    // categories for nav bar 
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props; 
    
    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="me">Yussel Panecatl</span>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <a data-setid="about" href="#about" onClick={() => setContactSelected(false)}>
                            About Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <span onClick={() => setContactSelected(true)}>Contact Me</span>
                    </li>
                    {categories.map((category) => (
                        <li className={`mx-1 ${
                            currentCategory.name === category.name && 'navActive'
                        }`} key={category.name}>
                            <span
                            onClick={() => {
                                setCurrentCategory(category);
                                setContactSelected(false);
                            }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav; 