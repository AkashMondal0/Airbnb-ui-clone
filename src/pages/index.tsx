import EmptyState from "@/components/EmptyState";
import ListCard from "@/components/Listings/ListCard";
import Container from "@/components/container/Container";

export default function Home() {

  const currentUser = null
  const listings = Array(100).fill(0)

  if (listings.length === 0) {
    return (
      <Container>
        <EmptyState />
      </Container>)
  }


  return (
    <>
      <Container>
        <div className="pt-25 
      grid grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      2xl:grid-cols-6
      gap-6
      pt-5
      ">
          {listings.map((listing) => (
            <ListCard key={listing.title} currentUser={currentUser} data={listing} reservation={[]} onAction={function (id: string): void {
              throw new Error("Function not implemented.");
            }} disabled={false} actionLabel={""} actionId={""} />
          ))}
        </div>
      </Container>
    </>
  )
}
