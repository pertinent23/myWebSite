( function( $ ) {
    $( document ).ready( function() {
        const
            height = window.innerHeight * 1.6,
            AnimationManager = {
                id: 0,
                fx: { },
                calcTop: function ( item ) {
                    let 
                        node = item[ 0 ],
                        result = 0;
                            result = window.scrollY + node.getBoundingClientRect().top;
                    return result;
                },
                init: async function( node ) {
                    const
                        item = $( node ), 
                        topSize = AnimationManager.calcTop( item );
                            AnimationManager.fx[ AnimationManager.id ] = function ( val ) {
                                if( val >= topSize - height && !Storage.inArray( node ) ) {
                                        item.animate( { opacity: 1, marginTop: "0px" }, 1200 );
                                        Storage.push( node );
                                    return true;
                                }
                                return false;
                            };
                    return AnimationManager.addId().hide( item );
                },
                build: function () {
                    $( ".animate-item" ).each( function() {
                        return AnimationManager.init( this );
                    } );
                },
                hide: function ( item ) {
                    return item.css( {
                        marginTop: "100px",
                        opacity: "0"
                    } );
                },
                addId: function () {
                        this.id++;
                    return this;
                },
                delId: function () {
                        this.id--;
                    return this;
                },
                callAllFx: function ( y ) {
                    if( this.id ) {
                        $.each( this.fx, function ( key ) {
                            if( this( y ) ) {
                                    delete AnimationManager.fx[ key ];
                                AnimationManager.delId();
                            }
                        } );
                    }
                }
            },
            Storage = [ ];
                $( "body" ).scroll( function() {
                    return AnimationManager.callAllFx( this.scrollY );
                } );
        return AnimationManager.build();
    } ); 
} )( window.Digital );