import React, { Fragment } from "react";
import Link from "next/link";

export const items = {
    list: { }
};

items.pushItem = function ( id, val ) {
    this.list[ id ] = ( addedClass ) => (
        <li className={ "nav-item d-flex w-auto" + "".concat( addedClass ) } id={ id } key={ id }>
            <Link href={ id === "home" ? "/" : "/route/".concat( id ) }>
                <a className="container-fluid nav-item nav-link">
                    <div className="navbar-item-content pl-3">
                        <span className="navbar-text"> { val } </span>
                    </div>
                    <div className="navbar-indicator">
                        <span className="indicator"></span>
                    </div>
                </a>
            </Link>
        </li>
    );
};

items.pushAllItems = ( list ) => {
    for( let id in list )
        items.pushItem( id, list[ id ] );
    return items;
};

items.toArray = ( active ) => {
    const arr = [];
        for( const id in items.list ) {
            const li = items.list[ id ];
            arr.push(
                id === active ? li( " active" ) : li( "" )
            );
        }
    return arr;
};

export default function Navigation ( { active } ) {
    return (
        <Fragment>
            { items.toArray( active ) }
        </Fragment>
    );
};

items.pushAllItems( {
    "home": "Home",
    "about-me": "About me",
    "contact-me": "Contact me",
} );