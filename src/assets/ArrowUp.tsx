export default function ArrowUp(
  { id, group, up }: { id: string, group?: string, up?: boolean }
) {

  return (<>
    <svg
      id={id}
      class={"arrowUp" + group ? ` ${group}` : ""}
      style={{
        rotate: up ? "0deg" : "180deg"
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 164.35 132.668">
      <polyline
        style={{
          fill: "none",
          stroke: "#ECECEC",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          strokeWidth: "30px",
        }}
        points="15 88.388 82.175 21.213 149.35 88.388" />
      <rect
        style={{
          fill: "none",
          stroke: "#fff24d",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          strokeWidth: "30px",
        }}
        x="76.175"
        y="96.97"
        width="12"
        height="12"
        transform="translate(-48.742 88.266) rotate(-45)" />
    </svg>
  </>)
}