import { Fragment } from 'react';
import { createListCollection, Card, DataList, Heading, Separator } from '@chakra-ui/react';

export function RequestDetails() {
  return (
    <Card.Root>
      <Card.Header>
        <Heading size="lg">Request details</Heading>
      </Card.Header>
      <Card.Body>
        <DataList.Root orientation="horizontal">
          {requestDetails.items.map((item, index) => (
            <Fragment key={item.value}>
              <DataList.Item>
                <DataList.ItemLabel minWidth={{ lg: 200 }}>{item.label}</DataList.ItemLabel>
                <DataList.ItemValue>{item.value}</DataList.ItemValue>
              </DataList.Item>
              {index < requestDetails.items.length - 1 && <Separator />}
            </Fragment>
          ))}
        </DataList.Root>
      </Card.Body>
    </Card.Root>
  );
}

const requestDetails = createListCollection({
  items: [
    { label: 'Request ID', value: '10007' },
    { label: 'Template ID', value: '10' },
    { label: 'Primary system', value: 'XTP' },
    { label: 'Account number', value: 'Y5409' },
    { label: 'Account name', value: 'Intermoney Valores Sociedad de Valores S.A.' },
    { label: 'Firm', value: 'MFL' },
    { label: 'Requested by', value: 'ZMayo@marexspectron.com' },
    { label: 'Requested at', value: '28 Sep 2023 15:20:01' },
    { label: 'Amount', value: '291,200.00' },
    { label: 'Currency', value: 'EUR' },
    { label: 'USD equivalent', value: '311,268.16 (€1 = $1.0568)' },
    { label: 'SSI', value: 'HSBC - ****** - ******** - ****** - 4021' },
  ],
});
