import { Block, BlockChild, MarkDef } from "@/sanity/schemaTypes/blockContent";
import React from "react";
import { H1, H2, H3, H4 } from "./text/headings";

export default function SanityBlock({ sanityBlock }: { sanityBlock: Block }) {
	const isBulletItem = sanityBlock.listItem === "bullet" || sanityBlock.listItem === "number";
	const { children, markDefs, style } = sanityBlock;

	if (style === "normal") {
		return isBulletItem ? (
			<li>{renderChildren(children, markDefs)}</li>
		) : (
			<p className="pb-4">{renderChildren(children, markDefs)}</p>
		);
	} else if (style === "h1") {
		return (
			<H1 wonderFont padded>
				{renderChildren(children, markDefs)}
			</H1>
		);
	} else if (style === "h2") {
		return (
			<H2 wonderFont padded>
				{renderChildren(children, markDefs)}
			</H2>
		);
	} else if (style === "h3") {
		return (
			<H3 wonderFont padded>
				{renderChildren(children, markDefs)}
			</H3>
		);
	} else if (style === "h4") {
		return (
			<H4 wonderFont padded>
				{renderChildren(children, markDefs)}
			</H4>
		);
	} else {
		console.error(`Sanity style ${style} not implemented`);
	}
	return `Sanity style ${style} not implemented`;
}

function renderChildren(children: BlockChild[], markDefs: MarkDef[]) {
	return children.map((child, index) => {
		let element = (
			<React.Fragment key={`renderchildrenqpoiudjsklda_${index}`}>
				{replaceNewlinesWithBR(child.text)}
			</React.Fragment>
		);
		child.marks.forEach((markKey) => {
			if (markKey === "em") {
				element = <i>{element}</i>;
			} else if (markKey === "strong") {
				element = <b>{element}</b>;
			} else if (markKey === "underline") {
				element = <u>{element}</u>;
			} else if (markDefs.map((md) => md._key).includes(markKey)) {
				const markDef = markDefs.filter((md) => md._key === markKey)[0];
				if (markDef._type !== "link") {
					throw Error(
						`Only implemented mark keys of type 'link' but got '${markDef._type}'`,
					);
				}
				element = (
					<a
						key={`renderchildrenqpoiudjsklda_${index}`}
						href={markDef.href ?? createHrefFromText(child.text)}
					>
						{element}
					</a>
				);
			} else {
				throw Error(
					`Mark key is not of 'em', 'strong', or 'underline' and wasnt found in markdefs object! Got ${markKey}`,
				);
			}
		});
		return element;
	});
}

function replaceNewlinesWithBR(text: string) {
	const splitted = text.split("\n");
	const jsxWithBR = splitted.map((text, index) =>
		index === splitted.length - 1 ? (
			<>{text}</>
		) : (
			<>
				{text}
				<br />
			</>
		),
	);
	return jsxWithBR;
}

function createHrefFromText(text: string) {
	const emailPattern = /[\w.-_]+?@[\w.-_]/;

	return emailPattern.test(text) ? `mailto:${text}` : text;
}
