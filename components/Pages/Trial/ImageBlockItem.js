import Animated from '../../Animated';
import RespImage from '../Cases/Invoice/RespImage';
import { Tag } from '../../Tag';
import InlineVideo from '../Cases/InlineVideo';

export default function ImageBlockItem({
  frames = '',
  item = { title: '', description: '', tags: [] },
}) {
  return (
    <div className="pt-10 md:pt-14 xl:pt-20 xl:mb-10">
      <Animated className="pb-10">
        <InlineVideo width="1000px" height="auto"  trial src={frames} />
      </Animated>
      <Animated className="items-end justify-between self-stretch md:flex">
        <div className="flex flex-col md:max-w-[550px] xl:max-w-[659px]">
          <div className="pb-6 text-next-heading-6 max-xs:mr-[-10px] ">{item.title}</div>
          <div className="text-next-body-s md:text-next-body-m">
            {item.description}
          </div>
        </div>
        <div className="flex flex-wrap content-start items-start gap-2 pt-8 md:max-w-[378px] xl:max-w-[470px]">
          {item.tags.map((tag, index) => (
            <Tag key={index} className="w-max">
              {tag}
            </Tag>
          ))}
        </div>
      </Animated>
    </div>
  );
}
