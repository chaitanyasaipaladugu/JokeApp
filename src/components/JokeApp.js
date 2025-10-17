import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJoke } from "../redux/jokeSlice";

const JokeApp = () => {
  const dispatch = useDispatch();
  const { currentJoke, loading, error, lastJoke } = useSelector(
    (state) => state.jokes
  );

  useEffect(() => {
    if (!lastJoke) {
      dispatch(fetchJoke());
    }
  }, [dispatch, lastJoke]);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Random Joke APP😂</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p style={{ fontSize: "1.2rem", minHeight: "50px" }}>
        {currentJoke || lastJoke || "No joke yet!"}
      </p>
      <p style={{ fontSize: "1.2rem", minHeight: "50px" }}>
        {currentJoke || lastJoke || "No joke yet!"}
      </p>
      <button onClick={() => dispatch(fetchJoke())} disabled={loading}>
        {loading ? "Fetching..." : "Get New Joke"}
      </button>
    </div>
  );
};
export default JokeApp;
