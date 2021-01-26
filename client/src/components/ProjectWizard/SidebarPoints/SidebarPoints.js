import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import ToolTipIcon from "../../ToolTip/ToolTipIcon";
import clsx from "clsx";
import ToolTip from "../../ToolTip/ToolTip";

const useStyles = createUseStyles({
  ruleValue: {
    fontSize: "40px",
    fontFamily: "Oswald, Calibri",
    fontWeight: "bold",
    marginBottom: 6
  },
  ruleName: {
    fontFamily: "Oswald, Calibri",
    fontSize: "16px",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  lowOpacity: {
    opacity: 0.4
  },
  noDisplay: {
    display: "none !important"
  },
  tooltip: {
    color: "rgb(30, 36, 63) !important",
    padding: "15px",
    minWidth: "200px",
    maxWidth: "400px",
    fontFamily: "Arial",
    fontSize: 12,
    lineHeight: "16px",
    fontWeight: "bold",
    boxShadow: "0px 0px 8px rgba(0, 46, 109, 0.2)",
    borderRadius: 2,
    "&.show": {
      visibility: "visible !important",
      opacity: "1 !important"
    }
  }
});

const SidebarPoints = props => {
  const classes = useStyles();
  const { rule } = props;
  const opacityTest =
    rule.value && rule.value !== "0" ? "" : classes.lowOpacity;
  const noToolTip = rule.value === 0 ? classes.noDisplay : "";

  return (
    <div className={clsx("tdm-calculation-metrics-panel-item", opacityTest)}>
      <div className={classes.ruleValue}>{rule.value}</div>
      <h3 className={classes.ruleName}>
        {rule.name}
        <span
          className={clsx(classes.projectLevelContainer, noToolTip)}
          data-tip={rule.description}
          data-iscapture="true"
          data-html="true"
          data-class={classes.tooltip}
        >
          <ToolTipIcon />
        </span>
      </h3>
      {/* TODO: figure out how it's getting description without id*/}
      <ToolTip />
    </div>
  );
};
SidebarPoints.propTypes = {
  rule: PropTypes.object.isRequired
};

export default SidebarPoints;
