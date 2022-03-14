import Layout from '../../components/layouts/secondary'

const MarketPlace = () => {
  return(
    <div>
      <div style = {{ display: 'grid'
      }>
          
      </div>
    </div>
  )
}

export default MarketPlace

MarketPlace.getLayout = (page) => {
  return(
    <Layout title = {"MarketPlace"}>
      {page}
    </Layout>
  )
}
