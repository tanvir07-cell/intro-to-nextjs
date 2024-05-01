const SpecificAboutPage = ({ params }: { params: { id: string[] } }) => {
  console.log(params);
  return (
    <div>
      This is the specific about page with{" "}
      {params.id ? params?.id?.join(",") : "0 slug"}
    </div>
  );
};

export default SpecificAboutPage;
