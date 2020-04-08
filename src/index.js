import React from "react";
import { useInView } from "react-intersection-observer";
import get from "lodash/get";
// eslint-disable-next-line import/no-unresolved
import classNames from "classnames";
// import { isIE } from "react-device-detect";

/*
    Documentation:
        To use withFade HOC
        1) wrap component you like to have fade plugin, 
        2) add fade-plugin schema to component
        3) add props.className variable to component className prop. withFade 
        exposes additional classes created based on consumer input from storyblok plugin
        4) add style props "style={props.style}"
outl
        example for TextBlock component:
        1. export default withFade(TextBlock)
        2. 
            fade_plugin: {
                type: "custom",
                field_type: "ef-component-fade-plugin",
                options: [],
                description: "Plugin for fading components into view."
            },
        3. <div className={`ef-text-block ${props.className}`} style={props.style}>

        * additionaly, you can use withFade HOC without storyblok plugin, by passing 
        configuration object to it:
        
        export default withFade(TextBlock)({
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
          };
        });

        You can always pass some data from Plugin, and some from code. 1 thing to remember
        is, you can pass whole config, classNames, or transitionConfig object, you cant mixed them up
*/

export const withFade = WrappedComponent => options => {
  const isIE = false;
  if (isIE) {
    return props => <WrappedComponent {...props} />;
  } else {
    return props => {
      // early return
      if (!get(props, "blok.fade_plugin.enabled") && !get(options, "enabled")) {
        // eslint-disable-next-line react/prop-types
        const { blok, ...restProps } = props;
        // eslint-disable-next-line react/prop-types
        const { fade_plugin, ...restBlok } = blok;

        return <WrappedComponent blok={restBlok} {...restProps} />;
      }
      // eslint-disable-next-line no-unused-vars
      const [ref, inView, entry] = useInView(
        get(options, "config") || get(props, "blok.fade_plugin.config") || {}
      );

      const transitionConfig = get(options, "transitionConfig") ||
        get(props, "blok.fade_plugin.transitionConfig") || {
          duration: 300,
          delay: 100,
          transitionProperty: "opacity",
          transitionTimingFunction: "ease"
        };

      const className = classNames(
        get(options, "classNames.before") ||
          get(props, "blok.fade_plugin.classNames.before"),
        entry &&
          entry.isIntersecting &&
          (get(options, "classNames.after") ||
            get(props, "blok.fade_plugin.classNames.after"))
      );

      const style = {
        "--transition-duration": `${transitionConfig.duration}ms`,
        "--transition-delay": `${transitionConfig.delay}ms`,
        "--transition-property": transitionConfig.transitionProperty,
        "--transition-timing-function":
          transitionConfig.transitionTimingFunction
      };

      return (
        <WrappedComponent
          {...props}
          withFadeClassName={className}
          withFadeStyle={style}
          forwardedRef={ref}
        />
      );
    };
  }
};
