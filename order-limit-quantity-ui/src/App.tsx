import {
  VerticalStack,
  HorizontalStack,
  Card,
  Text,
  Button,
  TextField,
  RadioButton,
  Checkbox,
  LegacyStack,
  Icon,
  Thumbnail,
  ResourceList,
  Divider
} from "@shopify/polaris";
import { SearchMinor, CancelMajor, ImageMajor } from "@shopify/polaris-icons";
import { useState, useCallback, useMemo } from "react";

function CardExample() {
  const [isDisabled, setDisabled] = useState("disabled");
  const [allProductsParticipateIn, setAllProductsParticipateIn] = useState(
    true
  );
  const [exceptForSomeProducts, setExceptForSomeProducts] = useState(false);
  const [
    specificCollectionsParticipageIn,
    setSpecificCollectionsParticipateIn
  ] = useState(false);
  const [
    specificProductsParticipageIn,
    setSpecificProductsParticipageIn
  ] = useState(false);

  const targetProductsHandleChange = useCallback(
    (newChecked: boolean, newValue: string) => {
      switch (newValue) {
        case "allProducts":
          setAllProductsParticipateIn(true);
          setSpecificCollectionsParticipateIn(false);
          setSpecificProductsParticipageIn(false);
          break;
        case "specificCollections":
          setAllProductsParticipateIn(false);
          setSpecificCollectionsParticipateIn(true);
          setSpecificProductsParticipageIn(false);
          break;
        case "specificProducts":
          setAllProductsParticipateIn(false);
          setSpecificCollectionsParticipateIn(false);
          setSpecificProductsParticipageIn(true);
          break;
      }
    },
    []
  );

  const exceptForSomeProductsHandleChange = useCallback(
    (newChecked: boolean, newValue: string) => {
      setExceptForSomeProducts(newChecked);
    },
    []
  );
  
  return (
    <Card>
      <div style={{ padding: "0 0 15px 0" }}>
        <Text as={"h2"} variant="headingLg">
          Applies to
        </Text>
      </div>
      <VerticalStack gap="1">
        <RadioButton
          label="All products"
          checked={allProductsParticipateIn}
          id="allProducts"
          name="targetProducts"
          onChange={targetProductsHandleChange}
          helpText={
            allProductsParticipateIn ? (
              <HorizontalStack gap="5">
                <Checkbox
                  label="Except for some products specified"
                  checked={exceptForSomeProducts}
                  onChange={exceptForSomeProductsHandleChange}
                />
                {/* <Checkbox
                  label="Excluded some collections"
                  checked={false}
                  // onChange={handleChange}
                /> */}
              </HorizontalStack>
            ) : null
          }
        />
        <RadioButton
          label="Specific collections"
          id="specificCollections"
          name="targetProducts"
          checked={specificCollectionsParticipageIn}
          onChange={targetProductsHandleChange}
          // helpText={
          //   specificCollectionsParticipageIn ? (
          //     <Combobox
          //       allowMultiple
          //       activator={
          //         <Combobox.TextField
          //           autoComplete="off"
          //           label="Search collections"
          //           labelHidden
          //           value={value}
          //           suggestion={suggestion}
          //           placeholder="Search collections"
          //           verticalContent={verticalContentMarkup}
          //           onChange={setValue}
          //         />
          //       }
          //     >
          //       {listboxMarkup}
          //     </Combobox>
          //   ) : null
          // }
        />
        <RadioButton
          label="Specific products"
          id="specificProducts"
          name="targetProducts"
          checked={specificProductsParticipageIn}
          onChange={targetProductsHandleChange}
        />
        {specificProductsParticipageIn ? (
          <div style={{ padding: "10px 0" }}>
            <VerticalStack gap="2">
              <Text as={"h3"} variant="bodyMd">
                Specific products list
              </Text>
              <Divider />
            </VerticalStack>
            <ResourceList
              resourceName={{ singular: "customer", plural: "customers" }}
              filterControl={
                <div style={{ padding: "15px 15px 15px 10px" }}>
                  <TextField
                    prefix={<Icon source={SearchMinor} />}
                    label="search products"
                    labelHidden
                    placeholder="search products"
                    value={""}
                    // onChange={null}
                    autoComplete="off"
                    connectedRight={<Button>Browse</Button>}
                  ></TextField>
                </div>
              }
              flushFilters
              items={[
                {
                  id: "341",
                  url: "#",
                  name: "Mae Jemison",
                  location: "Decatur, USA"
                },
                {
                  id: "256",
                  url: "#",
                  name: "Ellen Ochoa",
                  location: "Los Angeles, USA"
                },
                {
                  id: "256",
                  url: "#",
                  name: "Ellen Ochoa",
                  location: "Los Angeles, USA"
                }
              ]}
              renderItem={(item) => {
                const { id, url, name, location } = item;

                return (
                  <VerticalStack>
                    <div style={{ padding: "10px" }}>
                      <LegacyStack>
                        <LegacyStack.Item fill>
                          <HorizontalStack gap="5">
                            <Thumbnail
                              size="small"
                              source={ImageMajor}
                              alt="Black choker necklace"
                            />
                            <div style={{ padding: "10px 0" }}>{name}</div>
                          </HorizontalStack>
                        </LegacyStack.Item>
                        <Button
                          plain
                          monochrome
                          icon={<Icon source={CancelMajor} />}
                        ></Button>
                      </LegacyStack>
                    </div>
                    <Divider />
                  </VerticalStack>
                );
              }}
            />
          </div>
        ) : null}
        {specificCollectionsParticipageIn ? (
          <div style={{ padding: "10px 0" }}>
            <VerticalStack gap="2">
              <Text as={"h3"} variant="bodyMd">
                Specific collections list
              </Text>
              <Divider />
            </VerticalStack>
            <ResourceList
              resourceName={{ singular: "customer", plural: "customers" }}
              filterControl={
                <div style={{ padding: "15px 15px 15px 10px" }}>
                  <TextField
                    prefix={<Icon source={SearchMinor} />}
                    label="search collections"
                    labelHidden
                    placeholder="search collections"
                    value={""}
                    // onChange={null}
                    autoComplete="off"
                    connectedRight={<Button>Browse</Button>}
                  ></TextField>
                </div>
              }
              flushFilters
              items={[
                {
                  id: "341",
                  url: "#",
                  name: "Mae Jemison",
                  location: "Decatur, USA"
                },
                {
                  id: "256",
                  url: "#",
                  name: "Ellen Ochoa",
                  location: "Los Angeles, USA"
                },
                {
                  id: "256",
                  url: "#",
                  name: "Ellen Ochoa",
                  location: "Los Angeles, USA"
                }
              ]}
              renderItem={(item) => {
                const { id, url, name, location } = item;

                return (
                  <VerticalStack>
                    <div style={{ padding: "10px" }}>
                      <LegacyStack>
                        <LegacyStack.Item fill>
                          <HorizontalStack gap="5">
                            <Thumbnail
                              size="small"
                              source={ImageMajor}
                              alt="Black choker necklace"
                            />
                            <div style={{ padding: "10px 0" }}>{name}</div>
                          </HorizontalStack>
                        </LegacyStack.Item>
                        <Button
                          plain
                          monochrome
                          icon={<Icon source={CancelMajor} />}
                        ></Button>
                      </LegacyStack>
                    </div>
                    <Divider />
                  </VerticalStack>
                );
              }}
            />
          </div>
        ) : null}
        {allProductsParticipateIn && exceptForSomeProducts ? (
          <div style={{ padding: "10px 0" }}>
            <VerticalStack gap="2">
              <Text as={"h3"} variant="bodyMd">
                except products list
              </Text>
              <Divider />
            </VerticalStack>
            <ResourceList
              resourceName={{ singular: "customer", plural: "customers" }}
              filterControl={
                <div style={{ padding: "15px 15px 15px 10px" }}>
                  <TextField
                    prefix={<Icon source={SearchMinor} />}
                    label="search products"
                    labelHidden
                    placeholder="search products"
                    value={""}
                    // onChange={null}
                    autoComplete="off"
                    connectedRight={<Button>Browse</Button>}
                  ></TextField>
                </div>
              }
              flushFilters
              items={[
                {
                  id: "341",
                  url: "#",
                  name: "Mae Jemison",
                  location: "Decatur, USA"
                },
                {
                  id: "256",
                  url: "#",
                  name: "Ellen Ochoa",
                  location: "Los Angeles, USA"
                },
                {
                  id: "256",
                  url: "#",
                  name: "Ellen Ochoa",
                  location: "Los Angeles, USA"
                }
              ]}
              renderItem={(item) => {
                const { id, url, name, location } = item;

                return (
                  <VerticalStack>
                    <div style={{ padding: "10px" }}>
                      <LegacyStack>
                        <LegacyStack.Item fill>
                          <HorizontalStack gap="5">
                            <Thumbnail
                              size="small"
                              source={ImageMajor}
                              alt="Black choker necklace"
                            />
                            <div style={{ padding: "10px 0" }}>{name}</div>
                          </HorizontalStack>
                        </LegacyStack.Item>
                        <Button
                          plain
                          monochrome
                          icon={<Icon source={CancelMajor} />}
                        ></Button>
                      </LegacyStack>
                    </div>
                    <Divider />
                  </VerticalStack>
                );
              }}
            />
          </div>
        ) : null}
      </VerticalStack>
    </Card>
  );
}

export default CardExample;
