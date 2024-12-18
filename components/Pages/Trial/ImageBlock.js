import Animated from "../../Animated";
import Layout from "../../Layout";
import ImageBlockItem from "./ImageBlockItem";

export default function ImageBlock({items, headerTitle, frames = []}) {
	return (
		<Layout>
			<Animated as='h2' className='shrink-0 text-next-heading-5 md:mb-0 md:text-next-heading-3 xl:text-next-heading-2'>
				{headerTitle}
			</Animated>
			{items.map((item, index) => (
					<ImageBlockItem item={item} key={index} frames={frames[index]}/>
				))}
		</Layout>
	)
}