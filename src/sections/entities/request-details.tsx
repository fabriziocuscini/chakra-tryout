import { Fragment } from 'react';
import { createListCollection, Card, DataList, Heading, Separator } from '@chakra-ui/react';

interface RequestDetail {
  label: string;
  value: string;
}

interface RequestDetailsProps {
  items: RequestDetail[];
}

export function RequestDetails({ items }: RequestDetailsProps) {
  return (
    <Card.Root>
      <Card.Header>
        <Heading size="lg">Request details</Heading>
      </Card.Header>
      <Card.Body>
        <DataList.Root orientation="horizontal">
          {items.map((item, index) => (
            <Fragment key={item.value}>
              <DataList.Item>
                <DataList.ItemLabel minWidth={{ lg: 200 }}>{item.label}</DataList.ItemLabel>
                <DataList.ItemValue>{item.value}</DataList.ItemValue>
              </DataList.Item>
              {index < items.length - 1 && <Separator />}
            </Fragment>
          ))}
        </DataList.Root>
      </Card.Body>
    </Card.Root>
  );
}
