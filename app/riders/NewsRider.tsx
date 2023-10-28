import MenuRider from "../components/MenuRider";

export default function NewsRider({
	expandedMenu,
	setExpanded,
}: { expandedMenu: string; setExpanded: { (menu: string): void } }) {
	return (
		<MenuRider
			title="News"
			textColor="#BC8C9F"
			backgroundColor="white"
			orderedSubmenu={[""]}
			submenuContentMap={NewsMenuToContentMapDeutsch}
			expandedMenu={expandedMenu}
			setExpanded={setExpanded}
		/>
	);
}

const NewsMenuToContentMapDeutsch = {
	"": <div />,
};
