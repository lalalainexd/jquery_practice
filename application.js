var add_to_order= function(){
	var item = $(this).text();
	$(order).append(new_order_item(item));
};

var remove_from_order = function(event) {
	event.preventDefault();
	$(this).remove();
}

var new_order_item = function(item) {
	var item_tag = "<li>"+item+" <a href='#' class='remove'>remove</a></li>";
	return item_tag
}

var hide_sub_menus = function() {
	$(".sub-menu").toggle();
}

var toggle_menu_on_click = function() {
	var container = $(this).closest(".sub-menu-container")
	container.find("ul").slideToggle(100);
}

$(document).ready(function() {
	hide_sub_menus();
	$(".sub-menu").on("click", "li", add_to_order)
	$("#order").on("click", "li", remove_from_order)
	$(".sub-menu-container").on("click", "h2", toggle_menu_on_click)
});
