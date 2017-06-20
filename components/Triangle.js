const Triangle = () => (
  <div className="vh-100 dt w-100 bg-white">
    <div className="dtc v-mid tc black-80 ph3 ph4-l">
      <svg
        viewBox="0 0 16 16"
        width="260"
        height="260"
        fill="none"
        stroke="currentcolor"
        className="rot"
      >
        <path d="M3 1.5 L3 14.5 L14.258330249197702 8 z" />
      </svg>
    </div>
    <style jsx>{`
    .rot {
      transform: rotate( -15deg );
    }
  `}</style>
  </div>
);

export default Triangle;
