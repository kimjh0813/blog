import * as T from './type';

export function NextSeo({ title, description, path }: T.NextSeoProps) {
  return (
    <>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={`https://jonghun.vercel.app/${path}`} />
      <meta property='og:type' content='website' />
    </>
  );
}
