import {
  Alert,
  Card,
  DataList,
  DataListItem,
  DataListItemLabel,
  DataListItemValue,
  Flex,
  Heading,
  HStack,
  Separator,
  Stack,
  Text,
} from '@chakra-ui/react';

export function RiskReviewLifecycle() {
  return (
    <Card.Root>
      <Card.Header>
        <Heading size="lg">Risk review lifecycle</Heading>
      </Card.Header>
      <Card.Body>
        <Stack gap={6}>
          <Alert.Root status="warning">
            <Alert.Indicator />
            <Alert.Title>Periodic review due 24 May 2024</Alert.Title>
          </Alert.Root>
          <DataList.Root orientation="vertical">
            <DataListItem>
              <DataListItemLabel>Due diligence level</DataListItemLabel>
              <DataListItemValue>Standard</DataListItemValue>
            </DataListItem>
          </DataList.Root>
        </Stack>
      </Card.Body>
      <Separator />
      <HStack alignItems="stretch">
        <Card.Body py={3}>
          <DataList.Root orientation="vertical">
            <DataListItem>
              <DataListItemLabel>Last Review Date</DataListItemLabel>
              <DataListItemValue>19 Jan 2024</DataListItemValue>
            </DataListItem>
          </DataList.Root>
        </Card.Body>
        <Separator orientation="vertical" />
        <Card.Body py={3}>
          <DataList.Root orientation="vertical">
            <DataListItem>
              <DataListItemLabel>Next Review Date</DataListItemLabel>
              <DataListItemValue>24 May 2024</DataListItemValue>
            </DataListItem>
          </DataList.Root>
        </Card.Body>
      </HStack>
    </Card.Root>
  );
}
