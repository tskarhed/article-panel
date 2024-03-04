import React from 'react';

import { css, cx } from '@emotion/css';

import { GrafanaTheme2, textUtil, dateTimeFormat } from '@grafana/data';
import { useStyles2 } from '@grafana/ui';

interface NewsItemProps {
  width: number;
  maxContentHeight: number;
  title?: string;
  description?: string;
  imageUrl?: string;
  href?: string;
  date: string;
}

export function Article({ width, title, description, imageUrl, href, date, maxContentHeight }: NewsItemProps) {
  const styles = useStyles2(getStyles, maxContentHeight);
  const useWideLayout = width > 600;
  const titleId = encodeURI(title || '');

  return (
    <article aria-labelledby={titleId} className={cx(styles.item, useWideLayout && styles.itemWide)}>
      {imageUrl && href && (
        <a
          tabIndex={-1}
          href={textUtil.sanitizeUrl(href)}
          target="_blank"
          rel="noopener noreferrer"
          className={cx(styles.socialImage, useWideLayout && styles.socialImageWide)}
          aria-hidden
        >
          <img src={imageUrl} alt={title} />
        </a>
      )}
      <div className={styles.body}>
        <time className={styles.date} dateTime={dateTimeFormat(date, { format: 'MMM DD' })}>
          {dateTimeFormat(date, { format: 'MMM DD' })}{' '}
        </time>
        {title && href && (
          <a className={styles.link} href={textUtil.sanitizeUrl(href)} target="_blank" rel="noopener noreferrer">
            <h3 id={titleId} className={styles.title}>
              {title}
            </h3>
          </a>
        )}
        {title && !href && (
          <h3 id={titleId} className={styles.title}>
            {title}
          </h3>
        )}
        {description && (
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: textUtil.sanitize(description) }} />
        )}
      </div>
    </article>
  );
}

const getStyles = (theme: GrafanaTheme2, height: number) => ({
  container: css({
    height: '100%',
  }),
  item: css({
    display: 'flex',
    padding: theme.spacing(1),
    position: 'relative',
    marginBottom: theme.spacing(0.5),
    marginRight: theme.spacing(1),
    borderBottom: `2px solid ${theme.colors.border.weak}`,
    background: theme.colors.background.primary,
    flexDirection: 'column',
    flexShrink: 0,
  }),
  itemWide: css({
    flexDirection: 'row',
  }),
  body: css({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  }),
  socialImage: css({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
    '> img': {
      width: '100%',
      borderRadius: `${theme.shape.radius.default} ${theme.shape.radius.default} 0 0`,
    },
  }),
  socialImageWide: css({
    marginRight: theme.spacing(2),
    marginBottom: 0,
    '> img': {
      width: '250px',
      borderRadius: theme.shape.radius.default,
    },
  }),
  link: css({
    color: theme.colors.text.link,
    display: 'inline-block',

    '&:hover': {
      color: theme.colors.text.link,
      textDecoration: 'underline',
    },
  }),
  title: css({
    fontSize: '16px',
    marginBottom: theme.spacing(0.5),
  }),
  content: css({
    maxHeight: height,
    overflow: 'hidden',
    p: {
      marginBottom: theme.spacing(0.5),
      color: theme.colors.text.primary,
    },
  }),
  date: css({
    marginBottom: theme.spacing(0.5),
    fontWeight: 500,
    borderRadius: `0 0 0 ${theme.shape.radius.default}`,
    color: theme.colors.text.secondary,
  }),
});
