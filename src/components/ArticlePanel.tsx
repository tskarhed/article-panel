import React from 'react';

import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { CustomScrollbar } from '@grafana/ui';
import { Article } from './Article';

interface Props extends PanelProps<SimpleOptions> {}

export const ArticlePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const titles = data.series[0].fields.find((field) => field.name === options.titleField)?.values;
  const hrefs = data.series[0].fields.find((field) => field.name === options.hrefField)?.values;
  const imageUrls = data.series[0].fields.find((field) => field.name === options.imageUrlField)?.values;
  const dates = data.series[0].fields.find((field) => field.name === options.dateField)?.values;
  const descriptions = data.series[0].fields.find((field) => field.name === options.descriptionField)?.values;

  return (
    <CustomScrollbar autoHeightMin="100%" autoHeightMax="100%">
      {titles?.map((_: unknown, index: number) => {
        return (
          <Article
            key={index}
            width={width}
            maxContentHeight={options.maxContentHeight}
            date={dates && dates[index]}
            imageUrl={imageUrls && imageUrls[index]}
            href={hrefs && hrefs[index]}
            title={titles && titles[index]}
            description={descriptions && descriptions[index]}
          />
        );
      })}
    </CustomScrollbar>
  );
};
