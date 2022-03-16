import NFTCard from '../../components/NFT_cards/nft_cards'
import Image from '../../public/images/demo_image.png'

const MarketPlace = () => {
    return(
        <div style = {{ display: "flex" , flexDirection: 'column', paddingLeft: "35px"}}>
            <div style = {{ fontSize: "48px", fontWeight: "bold", color: "white"}}>
            Marketplace
        </div>
            <div style = {{ color: "var(--secondary-tool)" , marginTop: "5px", fontSize: "24px", fontWeight: "bold",}}>
                Your one place for  all of the NFTs!
        </div>
            <div style = {{ fontSize: "22px", display: "flex", justifyContent: "space-between", fontWeight: "bold", color: "white", marginTop: "40px", paddingRight: "20px"}}>
                <div>Image NFTs</div>
                <div style = {{ cursor: "pointer", color: "var(--secondary-tool)" }}> See All </div>
            </div>
            <div style = {{ display: 'flex', marginTop: "30px", gap: "45px", width: "100%", overflow: "scroll", height: '330px'}}>
            <NFTCard name = "Hello" desc = "A great game of two characters from the next gen" img = {Image} alt ="nothing" />
            <NFTCard name = "Hello" desc = "A great game of two characters from the next gen" img = {Image} alt ="nothing" />
            <NFTCard name = "Hello" desc = "A great game of two characters from the next gen" img = {Image} alt ="nothing" />
            <NFTCard name = "Hello" desc = "A great game of two characters from the next gen" img = {Image} alt ="nothing" />
            <NFTCard name = "Hello" desc = "A great game of two characters from the next gen" img = {Image} alt ="nothing" />
            </div>
            <div style = {{ fontSize: "22px", display: "flex", justifyContent: "space-between", fontWeight: "bold", color: "white", marginTop: "60px", paddingRight: "20px"}}>
                <div>Meme NFTs</div>
                <div style = {{ cursor: "pointer", color: "var(--secondary-tool)" }}> See All </div>
            </div>
            <div style = {{ display: 'flex', marginTop: "30px", gap: "45px", width: "100%", overflow: "scroll", height: '330px'}}>
            <NFTCard name = "Hello" desc = "A great game of two characters from the next gen" img = {Image} alt ="nothing" />
            <NFTCard name = "Hello" desc = "A great game of two characters from the next gen" img = {Image} alt ="nothing" />
            <NFTCard name = "Hello" desc = "A great game of two characters from the next gen" img = {Image} alt ="nothing" />
            <NFTCard name = "Hello" desc = "A great game of two characters from the next gen" img = {Image} alt ="nothing" />
            <NFTCard name = "Hello" desc = "A great game of two characters from the next gen" img = {Image} alt ="nothing" />
            </div>


        </div>
    )
}

export default MarketPlace
