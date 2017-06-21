const Triangle = ({
  width = "32",
  height = "32",
  centered = false,
  color = "black"
}) => (
  <div className={centered && "vh-100 dt w-100 bg-white"}>
    <div className={centered && "dtc v-mid tc black-80 ph3 ph4-l"}>
      <svg
        viewBox="0 0 16 16"
        width={width}
        height={height}
        fill="none"
        stroke={color}
        className="rot"
      >
        <path d="M3 1.5 L3 14.5 L14.258330249197702 8 z" />
      </svg>
    </div>
    <style jsx>{`
    .rot {
      transform: rotate( -20deg );
      transition: transform 1s;
    }
    .rot:hover {
      transform: rotate(690deg);
    }
  `}</style>
  </div>
);

export default Triangle;
