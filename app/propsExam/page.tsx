import PropsComponent from "@/components/PropsComponent";

export default function PropsAndChildComponent() {
  return (
    <>
      {/* <PropsComponent integer={10} component={FloatingComponent} />
      <hr />
      <PropsComponent integer={1} component={FloatingComponent1} /> */}
      <PropsComponent
        children={
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              fugit voluptates facere. Excepturi fugiat dicta maxime. Maiores
              veniam aspernatur exercitationem numquam, mollitia quaerat
              inventore nisi, cum id dolor officia beatae.
            </p>
          </div>
        }
        integer={22}
        component={FloatingComponent22}
      ></PropsComponent>
      {/* <FloatingComponent /> */}
    </>
  );
}

export function FloatingComponent() {
  return (
    <>
      <h2>The Floating component!</h2>
    </>
  );
}

export function FloatingComponent1() {
  return (
    <>
      <h2>The float1</h2>
    </>
  );
}

export function FloatingComponent22() {
  return (
    <>
      <h2>The float</h2>
    </>
  );
}
