const Loading = () => {
  return (
    <div
      className="position-fixed w-100 h-100 text-center loading op"
      style={{
        background: "#000",
        color: "#FFE11B",
        top: 0,
        left: 0,
        zIndex: 9,
      }}
    >
      <svg width="205" height="250" viewBox="0 0 40 50">
        <polygon
          strokeWidth="1"
          stroke="#FFE11B"
          fill="none"
          points="20,1 40,40 1,40"
        ></polygon>
        <text fill="#FFE11B" x="5" y="47">
          Loading
        </text>
      </svg>
    </div>
  );
};

export default Loading;
