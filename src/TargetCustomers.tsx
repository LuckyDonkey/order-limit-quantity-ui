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
  import { useState, useCallback } from "react";
  
  function CardExample() {
    const [allCustomersParticipateIn, setAllCustomersParticipateIn] = useState(
      true
    );
    const [exceptForSomeCustomers, setExceptForSomeCustomers] = useState(false);
    const [
      specificCustomerSegmentsParticipageIn,
      setSpecificCustomerSegmentsParticipateIn
    ] = useState(false);
    const [
      specificCustomersParticipageIn,
      setSpecificCustomersParticipageIn
    ] = useState(false);
  
    const targetCustomersHandleChange = useCallback(
      (newChecked: boolean, newValue: string) => {
        switch (newValue) {
          case "allCustomers":
            setAllCustomersParticipateIn(true);
            setSpecificCustomerSegmentsParticipateIn(false);
            setSpecificCustomersParticipageIn(false);
            break;
          case "specificCustomerSegments":
            setAllCustomersParticipateIn(false);
            setSpecificCustomerSegmentsParticipateIn(true);
            setSpecificCustomersParticipageIn(false);
            break;
          case "specificCustomers":
            setAllCustomersParticipateIn(false);
            setSpecificCustomerSegmentsParticipateIn(false);
            setSpecificCustomersParticipageIn(true);
            break;
        }
      },
      []
    );
  
    const exceptForSomeCustomersHandleChange = useCallback(
      (newChecked: boolean, newValue: string) => {
        setExceptForSomeCustomers(newChecked);
      },
      []
    );
  
    return (
      <Card>
        <div style={{ padding: "0 0 15px 0" }}>
          <Text as={"h2"} variant="headingLg">
            Target customers
          </Text>
        </div>
        <VerticalStack gap="1">
          <RadioButton
            label="All customers"
            checked={allCustomersParticipateIn}
            id="allCustomers"
            name="targetCustomers"
            onChange={targetCustomersHandleChange}
            helpText={
              allCustomersParticipateIn ? (
                <HorizontalStack gap="5">
                  <Checkbox
                    label="Except for some customers specified"
                    checked={exceptForSomeCustomers}
                    onChange={exceptForSomeCustomersHandleChange}
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
            label="Specific customers segments"
            id="specificCustomerSegments"
            name="targetCustomers"
            checked={specificCustomerSegmentsParticipageIn}
            onChange={targetCustomersHandleChange}
          />
          <RadioButton
            label="Specific customers"
            id="specificCustomers"
            name="targetCustomers"
            checked={specificCustomersParticipageIn}
            onChange={targetCustomersHandleChange}
          />
          {specificCustomersParticipageIn ? (
            <div style={{ padding: "10px 0" }}>
              <VerticalStack gap="2">
                <Text as={"h3"} variant="bodyMd">
                  Specific customers list
                </Text>
                <Divider />
              </VerticalStack>
              <ResourceList
                resourceName={{ singular: "customer", plural: "customers" }}
                filterControl={
                  <div style={{ padding: "15px 15px 15px 10px" }}>
                    <TextField
                      prefix={<Icon source={SearchMinor} />}
                      label="search customers"
                      labelHidden
                      placeholder="search customers"
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
          {specificCustomerSegmentsParticipageIn ? (
            <div style={{ padding: "10px 0" }}>
              <VerticalStack gap="2">
                <Text as={"h3"} variant="bodyMd">
                  Specific customer segments list
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
          {allCustomersParticipateIn && exceptForSomeCustomers ? (
            <div style={{ padding: "10px 0" }}>
              <VerticalStack gap="2">
                <Text as={"h3"} variant="bodyMd">
                  except customers list
                </Text>
                <Divider />
              </VerticalStack>
              <ResourceList
                resourceName={{ singular: "customer", plural: "customers" }}
                filterControl={
                  <div style={{ padding: "15px 15px 15px 10px" }}>
                    <TextField
                      prefix={<Icon source={SearchMinor} />}
                      label="search customers"
                      labelHidden
                      placeholder="search customer"
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
  