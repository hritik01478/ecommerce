import styled from 'styled-components';
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from "@material-ui/icons";
import { Link } from 'react-router-dom';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    // border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    background-color: rgba(0,0,0,0.2);
    transition: all 0.5s ease;
    padding:0px;

`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 250px;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`
const Circle = styled.div`
    width: 200px;
    height:200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

const Product = ({ item }) => {
    return (

        < Container >
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <Link to="/cart" style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "black" }}>
                        <ShoppingCartOutlined />
                    </Link>
                </Icon>
                <Icon>
                    <Link to="/product" style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "black" }}>
                        <SearchOutlined />
                    </Link >
                </Icon>
                <Icon>
                    <Link to="/product" style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "black" }}>
                        <FavoriteBorderOutlined />
                    </Link>
                </Icon>
            </Info>
        </Container >

    )
}

export default Product