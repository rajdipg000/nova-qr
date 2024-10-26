    $(document).mousemove((e) => {
        let x = e.pageX, y = e.pageY;
        let tempx = 0, tempy = 0;
    
        $(".cursor").css({
            "transition": "0.01s ease-in-out",
            top: (y - 12) + "px",
            left: (x - 12) + "px",
            "width":"15px",
            
        });
        $(".cursor-border").css({
            "transition": "0.05s ease-in-out",
            top: (y - 20) + "px",
            left: (x - 20) + "px",
        });
    });
    $(".cursor-over").mouseover((e) => {
        let x = e.pageX, y = e.pageY;
        let tempx = 0, tempy = 0;
    
        $(".cursor").css({
            "transition": "0.01s ease-in-out",
            top: (y - 12) + "px",
            left: (x - 12) + "px",
            "width":"30px",
            
        });
        $(".cursor-border").css({
            "transition": "0.5s ease-in-out",
            top: (y - 20) + "px",
            left: (x - 20) + "px",
        });
    })