import React from "react";
import { withFade } from "component-fade-plugin-react-consumer";

const SomethingWithFade = (props) => {
    console.log("propsy");
    console.log(props);
  return (
    <div className={props.withFadeClassName} style={props.withFadeStyle} ref={props.forwardedRef}>
      <h3>To jest kod</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi
        praesentium suscipit veritatis, nesciunt labore sunt consectetur
        deserunt tempora? Odio placeat quos nihil possimus blanditiis cupiditate
        a dolorum et laborum! Autem magni repudiandae laudantium consectetur
        amet nulla sit ipsam quae quas officia possimus quo accusamus quidem
        voluptates vel, velit illo est necessitatibus magnam provident! Culpa
        minima tempore eos magnam magni? Aliquam molestias quae nihil molestiae
        earum doloribus, dicta dolorum laudantium vitae modi quam sint ex,
        commodi omnis distinctio ullam repellat, consectetur et nobis vero at.
        Inventore architecto ut error laudantium?
      </p>
    </div>
  );
};

export default withFade(SomethingWithFade)({
  classNames: {
    before: "before-fade",
    after: "after-fade"
  },
  config: {
    threshold: 0,
    triggerOnce: true
  },
  transitionConfig: {
    duration: 1000,
    delay: 1000,
    transitionProperty: "opacity",
    transitionTimingFunction: "ease"
  },
  enabled: true
});
