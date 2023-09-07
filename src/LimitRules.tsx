import {
  VerticalStack,
  HorizontalStack,
  Card,
  Text,
  TextField,
  Checkbox
} from "@shopify/polaris";
import React from "react";
import { useState, useCallback } from "react";

const Placeholder = ({
  label = "",
  height = "auto",
  width = "auto",
  showBorder = false,
  showBorderTop = false
}) => {
  return (
    <div
      style={{
        padding: "6px 0",
        // background: 'var(--p-color-text-info)',
        height: height,
        width: width,
        borderInlineStart: showBorder
          ? "1px dashed var(--p-color-bg-success-subdued)"
          : "none",
        borderBlockStart: showBorderTop
          ? "1px dashed var(--p-color-bg-success-subdued)"
          : "none"
      }}
    >
      <HorizontalStack align="center">
        <div
          style={{
            color: "var(--p-color-text-on-color)"
          }}
        >
          <Text as="h2" variant="bodyMd" fontWeight="medium">
            {label}
          </Text>
        </div>
      </HorizontalStack>
    </div>
  );
};

function CardExample() {
  const [ltXChecked, setLtXChecked] = useState(false);
  const [gtYChecked, setGtYChecked] = useState(false);
  const [ltXValue, setLtXValue] = useState(null);
  const [gtYValue, setGtYValue] = useState(null);
  const ltXCheckHandleChange = useCallback(
    (newChecked: boolean) => setLtXChecked(newChecked),
    []
  );
  const gtYCheckHandleChange = useCallback(
    (newChecked: boolean) => setGtYChecked(newChecked),
    []
  );

  return (
    <Card>
      <VerticalStack gap="5">
        <Text as="h2" variant="headingLg">
          single product purchase quantity limit rules
        </Text>
        <Checkbox
          label="When the quantity of specified single products is less than X, restricted checkout"
          checked={ltXChecked}
          onChange={ltXCheckHandleChange}
        />
        {ltXChecked ? (
          <HorizontalStack align="start" gap="3">
            <Placeholder width="15px" showBorder={false} />
            <Text as="h2" variant="bodyMd">
              X:
            </Text>
            <TextField
              label="Price"
              labelHidden
              type="number"
              autoComplete="off"
              align="right"
              min={1}
              value={ltXValue}
              onChange={setLtXValue}
            />
          </HorizontalStack>
        ) : null}
        <Checkbox
          label="When the quantity of specified single products is greater than Y, restricted checkout"
          checked={gtYChecked}
          onChange={gtYCheckHandleChange}
        />
        {gtYChecked ? (
          <HorizontalStack align="start" gap="3">
            <Placeholder width="15px" showBorder={false} />
            <Text as="h2" variant="bodyMd">
              Y:
            </Text>
            <TextField
              label="Price"
              labelHidden
              type="number"
              autoComplete="off"
              align="right"
              min={1}
              value={gtYValue}
              onChange={setGtYValue}
            />
          </HorizontalStack>
        ) : null}
      </VerticalStack>
    </Card>
  );
}

export default CardExample;
