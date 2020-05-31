// Modo de Uso


function popupper(url, w=360, h=280, x = 0, y = 0){
    pop=window.open(url,'PopupperJT','height='+h+',width='+w+',top='+y+', left='+x);
    if (window.focus) {
        pop.focus()
    }
    return false;
}
