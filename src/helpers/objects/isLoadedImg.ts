export default function isLoadedImg(index: number, activeIndex: number) {
  activeIndex - 1 === index ||
  activeIndex + 1 === index ||
  activeIndex === index;
}
