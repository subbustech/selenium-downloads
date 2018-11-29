<script>
	$(document).ready(function() {
    setTimeout(function() {
        $(".content").fadeOut(1500);
    }, 3000);

    $('#btnReset').click(function() {
        $(".content").show();
        setTimeout(function() {
            $(".content").fadeOut(1500);
        }, 3000);
    });
});
</script>
