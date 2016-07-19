import $ from "jquery";

let isCollapsed = true;

const setCollapsed = () => {
	if (isCollapsed) {
		$(".goals-content").addClass("is-collapsed");
		$(".view-more").text("SHOW");
	} else {
		$(".goals-content").removeClass("is-collapsed");
		$(".view-more").text("HIDE");
	}
};

const loadDropDown = () => {
    $(document).ready(() => {
		setCollapsed();

        $(".view-more").click(() => {
			isCollapsed = !isCollapsed;

			setCollapsed();
		});
    });
};

export default loadDropDown;
