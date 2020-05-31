// Modo de Uso
//
// <script>
//      //función("STRING enlace","INT ancho","INT alto","INT posición X", "INT posición Y");
//      //Ejemplo:
//      pupupper("https://www.youtube.com/embed/hGYkuhHPc-g", 480, 360, 50, 300);
// </script>

function popupper(url, w=360, h=280, x = 0, y = 0){
    pop=window.open(url,'PopupperJT','height='+h+',width='+w+',top='+y+', left='+x);
    if (window.focus) {
        pop.focus()
    }
    return false;
}
