import React, { useEffect, useState} from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Card from 'react-bootstrap/Card';
import {Container, Button, Box} from '@mui/material';
import { generateFromString } from "generate-avatar";
import Navbar from 'components/Navbar';
import { useNavigate } from "react-router-dom";
import PieChartIcon from '@mui/icons-material/PieChart';

const Avatar = styled.img`
  height: 30px;
  width: 30px;
  border: 3px solid white;
  border-radius: 50%;
`;

const CardHeader = styled.div`
  font-weight: 500;
`;

const DragItem = styled.div`
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  margin: 0 0 8px 0;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
`;

const DragDropContextContainer = styled.div`
  padding: 20px;
  border-radius: 6px;
`;


const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
`;

const ColumnHeader = styled.div`
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const DroppableStyles = styled.div`
  padding: 10px;
  padding-left: 10px;
  border-radius: 6px;
  display: "flex";
  overflow: "auto";
`;


function DragList() {
  const financialServicesAvailable = [
    { id: 1, type: 'Singapore Government Treasury Bills', description: `A good proxy for the risk-free rate in Singapore is the returns that the government of Singapore, one of the few triple-A-rated economies in the world today, pays on its 6-month or 1-year treasury bills. Treasury bills or T-bills are the shortest-term government securities available.
    The latest issuance of a 6-month T-bill in August 2022 offered an average yield of 2.28% per annum. The latest 12-month T-bills was offered in July, paying an interest of 2.82% – a slightly higher interest rate
    Treasury bills are typically useful for investors who are looking for very short-term investments of between six months to one year, without taking on much investment risk.`
    },
    { id: 2, type: 'Singapore Government Bonds', description: `The Singapore government also issues longer-termed bonds, between 2 years and 30 years. These bonds typically pay higher returns than its shorter-termed treasury bills. With all things equal, a bond with a longer maturity is typically deemed to carry more risks than the same bond with a shorter maturity period. Nevertheless, it is also regarded as close to risk-free and hence offers a rate of return that is close to the risk-free rate as well 
    In September 2021 the government issued the first tranche of its SINGA bonds to finance major long-term infrastructure projects, such as new railway lines, coastal protection projects and other infrastructure projects that will benefit current and future generations of Singaporeans. The SINGA bonds are considered Singapore Government Securities (SGS) bonds.`
    },
    { id: 3, type: 'Singapore Savings Bonds (SSB)', description: `By now, you would have noticed a recurring theme. The investments that are most likely to guarantee your capital and your returns are bonds issued by the government.
    First launched in October 2015, the SSB pays a step-up interest rate each year, up to the 10th year. What this means is that the bonds pay a lower return in the beginning years, and if investors do not redeem the bond, it continues to pay a higher rate each year, until the 10th year. This is primarily to recognise the fact that investors are holding the bonds for a longer-term.
    Here is the rate of each SSB issue, if you hold it for the full 10-year time frame, since its inception in October 2015.`
    },
    { id: 4, type: 'Fixed Deposits', description: `Although not commonly referred to as an investment, fixed deposits offer you a way to earn better returns on your money rather than leaving it in a savings account or under your pillow. As a reference, the three local banks in Singapore are currently offering the following Singapore-dollar fixed deposit rates.
    Of course, there are many other banks offering their own fixed deposit schemes as well as promotional rates which can be significantly better than the board rates. Many of them, including the three above, may come with certain conditions you have to fulfil to achieve the promotional rates. While it may seem like DBS is offering the best interest rate, we also have to look at the T&Cs closely.`
    },
    { id: 5, type: 'CPF Top-Ups', description: `To earn better interest returns, you can also consider making CPF top-ups into your Special Account (SA) via the Retirement Sum Topping-Up (RSTU) Scheme. These funds are guaranteed by the Singapore government and offer a minimum guaranteed return of 4.0% p.a. You can also make Voluntary Contributions (VC) into your Ordinary Account, Special Account and MediSave Account.
    Moreover, the first $60,000 of your CPF monies, with up to $20,000 in your CPF Ordinary Account (OA), will earn an additional 1.0% p.a. in interest returns. This means your top-ups may earn up to 5.0% p.a. if you top-up your CPF SA in the early years.`
    },
    { id: 6, type: 'Savings Plans', description: `Savings plans, offered by insurance companies, especially those that are non-participating in nature, are able to guarantee your capital as well as returns. You should also note that savings plans that guarantee your capital but do not guarantee returns also exist.
    When investing in a savings plan, you are typically required to lock your money over a fixed period of time or continue contributing over a fixed period of time. Not doing so may see you losing a substantial amount of the returns you expected to receive, if you are unsure about your liquidity needs for the funds you are investing.
    These plans are also covered by the Singapore Deposit Insurance Scheme in Singapore and may also offer an insurance component that pays out in the event something unfortunate happens to you.`
    }
  ]
  const financialServicesSelected = [
    { id: 1, type: 'Exchange Traded Funds', description: `An Exchange Traded Fund (ETF) is an investment fund listed and traded on the stock exchange. It is passively managed by fund managers. This means that fund managers set up these funds to track the performance of stock indices and sectors.
    Over the past decade, ETFs have gained popularity from investors globally. The key reason for its popularity is the ability and ease to diversify across different stock markets, sectors, and asset classes. Another benefit of ETFs is its low cost as compared to Unit Trusts.`
    },
    { id: 2, type: 'Real Estate Investment Trusts', description: `Wish to own more properties but you do not have enough capital and appetite for high risk? Real Estate Investment Trusts (Reits) could be your next investment solution. They are investment plans that own and invest in a diversified portfolio of properties that generate income. As such, the risk of investing in properties is reduced due to the process of diversification across multiple assets.
    Properties in a Reit may include office buildings, shopping malls, warehouses, business parks, hospitals, hotels, and data centres. The real estate assets are professionally managed by property managers. In view of the mandated 90% taxable income to shareholders from Reits, they can be considered a form of recurring passive income for investors and retirees.`
    },
    { id: 3, type: 'Structured Deposits (SD)', description: `Structured deposits offer higher returns and lower risk than equities and bonds. SD is the combination of a bank deposit and an investment product; returns depend on the performance of the underlying financial instruments, which could be bonds, market indices (e.g. SGX), equities (investment in traded companies), foreign exchange or a combination of these. Upon maturity, you get back your entire principal, in addition to the regular interest income you have already been receiving.`
    },
    { id: 4, type: 'Unit Trusts', description: `If you are keen to invest your funds in a diverse range of products, such as stocks, bonds and other financial instruments, unit trusts or collective investment schemes are a great option. Unit trusts provide access to assets or markets that may be difficult to invest in directly. Also, with a smaller investment outlay, you will be able to invest in a diverse portfolio of assets, which, if you invested in individually, may cost you more. While unit trusts do carry a higher level of risk than bonds and structured deposits, they offer much more flexibility, liquidity and diversity.`
    },
    { id: 5, type: 'Shares', description: `A popular investment option is the stock market. Active investments can take the form of day trading (where an investor buys stocks and sells them at a comparatively higher price within a single trading day) or long-term investing (where an investor buys a stock and holds on to it for an extended period).`
    },
    { id: 6, type: 'Exchange-Traded Funds (ETFs)', description: `ETFs offer a passive way of investing in shares, where an investor can track a particular index such as a stock or commodity index  (e.g. Straits Times Index). An index is, quite simply, a set of stocks that acts as a sample of the universe of stocks in a market or portfolio. It statistically measures the changes in the stocks it represents and can be used to track the performance of the market or portfolio.
    By investing in ETFs, you can gain exposure to the components of the index without directly buying individual stocks or bonds.  This type of investment is highly diversified and tends to have lower fees than actively managed funds. However, ETFs are not principal-guaranteed and you may lose all or a portion of your investment in certain situations.`
    },
  ]
  
  
  // fake data generator
  const getItems = (count, prefix) => {
  
    if (prefix==='Available') {
      return Array.from({ length: count }, (v, k) => k).map((k) => {
        return {
          id: `${financialServicesAvailable[k].type}`,
          prefix,
          content: `${financialServicesAvailable[k].description}`
        };
      });
    } else {
      return Array.from({ length: count }, (v, k) => k).map((k) => {
        return {
          id: `${financialServicesSelected[k].type}`,
          prefix,
          content: `${financialServicesSelected[k].description}`
        };
      });
    }
  
  }
  const removeFromList = (list, index) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
  };
  
  const addToList = (list, index, element) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
  };
  
  const lists = ["Available", "Selected"];
  
  const generateLists = () =>
    lists.reduce(
      (acc, listKey) => ({ ...acc, [listKey]: getItems(6, listKey) }),
      {}
    );
  const [elements, setElements] = useState(generateLists());
  const [descriptionOfService, setDescriptionOfService] = useState('description of the financial service selected');

  const handleMouseOver = (description) => {
    setDescriptionOfService(description);
  };

  const handleMouseOut = () => {
    setDescriptionOfService('description of the financial service selected');
  };

  useEffect(() => {
    setElements(generateLists());
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...elements };

    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    setElements(listCopy);
  };

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/changescharts'; 
    navigate(path);
  }

  return (
    <Container>
        <Navbar />
        {financialServicesSelected && <DragDropContextContainer>
            <DragDropContext onDragEnd={onDragEnd}>
                <ListGrid>
                <Card style={{ backgroundColor: '#d4d4d4', padding: '10px', borderRadius: '6px', paddingRight: '10px'}}>
                    <Card.Body>
                        <Card.Title style={{font: '20px', marginBottom: '20px'}}>DESCRIPTION</Card.Title>
                        <Card.Text>
                        {descriptionOfService}
                        </Card.Text>
                    </Card.Body>
                </Card>
                {lists.map((listKey) => (
                    <DroppableStyles>
                    <ColumnHeader>{listKey}</ColumnHeader>
                    <Droppable droppableId={`${listKey}`}>
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                        {elements[listKey].map((item, index) => {
                            return (
                            <Draggable draggableId={item.id} index={index}>
                            {(provided, snapshot) => (
                                <DragItem onMouseOver={() => handleMouseOver(item.content)} onMouseOut={handleMouseOut}
                                    ref={provided.innerRef}
                                    snapshot={snapshot}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <CardHeader style={{fontSize: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                    {item.id}
                                    <Avatar 
                                        src={`data:image/svg+xml;utf8,${generateFromString(item.id)}`}
                                        />
                                    </CardHeader>
                                </DragItem>
                                )}
                            </Draggable>
                            )})}
                        {provided.placeholder}
                        </div>
                    )}
                    </Droppable>
                </DroppableStyles>
                ))}
                </ListGrid>
            </DragDropContext>
        </DragDropContextContainer>}
        <Box>
        <Button variant="primary"> 
        <PieChartIcon/> 
        </Button>
        </Box>
    </Container>
    
  );
}

export default DragList;

