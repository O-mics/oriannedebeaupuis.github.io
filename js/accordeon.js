$(".openpanel").on("click", function() {
    $("#panel3").collapse('show');
});
$(".closepanel").on("click", function() {
    $("#panel3").collapse('hide');
});

    $('.collapse').on('shown.bs.collapse', function(){
$(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
}).on('hidden.bs.collapse', function(){
$(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
});