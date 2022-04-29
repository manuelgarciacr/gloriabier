/*CARGA*/
<script type="text/javascript">
    function popUp(URL) {
        window.open(URL, 'Nombre de la ventana', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=300,height=200,left = 390,top = 50');
    }
    </script>

/*POPUP*/
const button = document.querySelector('#accedir');
const popup = document.querySelector('.popup-wrapper');
 
button.addEventListener('click', () => {
    popup.style.display = 'block';
});


