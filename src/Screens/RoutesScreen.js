import { Box, ScrollView, VStack } from "native-base"
import { RoutesCard } from "../Components/CardsComponents/Cards";
import { AppBar } from "../Components/NavigationComponents/headerComponents";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBusRoutes } from "../Redux/Features/RouteSlice";

export const RoutesScreen =()=> {
    const state = useSelector((state) => state.routes)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(fetchBusRoutes())
    },[])
    return (
        <Box flex={1} bg={"blueGray.50"}>
          <AppBar/>
          <ScrollView mt={6}>
            <VStack space={4} alignItems={"center"} pb={4}>
              {state.status === "success" &&
                state.routesData.map((item, index)=>{
                  return(
                  <RoutesCard Color={"#38E54D"} Name={item.nombre} key={index} Origen={item.origen} Destino={item.destino} Id={item.id}/>
                  )
                })
              }
            </VStack>
          </ScrollView>
        </Box>
    );
  }