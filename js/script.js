<script type="text/javascript">
$(window).resize(function(){
    var x = $(window).width();
    var y = 766;
    if (y <= x){
        $("bars-icon").addClass('fa fa-bars').removeClass("header-right-icon");
    } else {
        $("bars-icon").addClass("header-right-icon").removeClass("fa fa-bars");
    }
});
</script>
