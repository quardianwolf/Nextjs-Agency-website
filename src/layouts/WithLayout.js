
export default function WithLayout({
  component: Component,
  layout: Layout,
  layoutData,
  data,
  ...rest
}) {
  return (
    <Layout data={layoutData}>
        <Component {...rest} data={data} />
    </Layout>
  );
}
