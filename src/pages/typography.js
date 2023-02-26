import '../styles/main.scss'; 

(function() {
    const contrastButton = document.getElementById( 'contrast' ); 
    const sectionElements = document.querySelectorAll( 'section' );

    contrastButton.addEventListener( 'click', ( e ) => {

        for( let i = 0; i < sectionElements.length; i++ ) { 
            sectionElements[ i ].classList.toggle( 'bg--primary-color' );
        }

    });
})();