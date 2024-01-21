import React, { useState } from "react";
import Tile from "../../ui/Tile/Tile";
import MediumCarImg from "../../resources/images/compact-car.png";
import CompactCarImg from "../../resources/images/car.png";
import class1CarImg from "../../resources/images/container-truck.png";
import fullSizeCarImg from "../../resources/images/sedan.png";
import class2CarImg from "../../resources/images/truck.png";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import styles from "./Dashboard.styles";
import DashboardTile from "./components/DashboardTile/DashboardTile";
import { Box, Chip } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import { useTheme } from "@mui/material/styles";
import Graphs from "./components/Graphs/Graphs";
const data = [
  {
    title: "Compact Cars",
    revenue: 23,
    lostRevenue: 23,
    gainedCustomers: 23,
    lostCustomers: 23,

    Icon: <styles.Img src={CompactCarImg} />,
  },
  {
    title: "Medium Cars",
    revenue: 23,
    lostRevenue: 23,
    gainedCustomers: 23,
    lostCustomers: 23,
    Icon: <styles.Img src={MediumCarImg} />,
  },
  {
    title: "Full Size Cars",
    revenue: 23,
    lostRevenue: 23,
    gainedCustomers: 23,
    lostCustomers: 23,

    Icon: <styles.Img src={fullSizeCarImg} />,
  },
  {
    title: "Class 1 Cars",
    revenue: 23,
    lostRevenue: 23,
    gainedCustomers: 23,
    lostCustomers: 23,

    Icon: <styles.Img src={class1CarImg} />,
  },
  {
    title: "Class 2 Cars",
    revenue: 23,
    lostRevenue: 23,
    gainedCustomers: 23,
    lostCustomers: 23,

    Icon: <styles.Img src={class2CarImg} />,
  },
];

const Dashboard = () => {
  const theme = useTheme();
  const isToday = true;

  const [date, setDate] = useState(dayjs());

  return (
    <styles.Container>
      <styles.Header>
        <Box fontSize={"2rem"}>Dashboard</Box>

        <DatePicker
          label="Select Date"
          value={date}
          onChange={(newValue) => setDate(newValue)}
        />
        {/* </LocalizationProvider> */}
      </styles.Header>

      <styles.TilesContainer>
        <Tile
          // title={"Total Revenue"}
          Icon={<styles.Img src={class2CarImg} />}
          styles={{
            rootStyles: {
              flexDirection: "row",
              justifyContent: "space-between",
              height: "max-content",
            },

            titleContainerStyles: {
              justifyContent: "left",
              flex: 1,
            },
          }}
        >
          <Box
            color={theme.palette.success.light}
            fontSize={"3rem"}
            fontWeight={600}
          >
            $1200
          </Box>
          <Box fontSize={"0.8rem"} textAlign={"right"}>
            Total Revenue
          </Box>
        </Tile>
        <Tile
          // title={"Total Revenue"}
          Icon={<styles.Img src={class2CarImg} />}
          styles={{
            rootStyles: {
              flexDirection: "row",
              justifyContent: "space-between",
              height: "max-content",
            },

            titleContainerStyles: {
              justifyContent: "left",
              flex: 1,
            },
          }}
        >
          <Box
            color={theme.palette.error.light}
            fontSize={"3rem"}
            fontWeight={600}
          >
            $100
          </Box>
          <Box fontSize={"0.8rem"} textAlign={"right"}>
            Total Revenue
          </Box>
        </Tile>

        {data.map((item, index) => {
          return (
            <DashboardTile
              isLoading={false}
              title={item.title}
              Icon={item.Icon}
              revenue={item.revenue}
              lostRevenue={item.lostRevenue}
              gainedCustomers={item.gainedCustomers}
              lostCustomers={item.lostCustomers}
              // revenue={item.revenue}
            />
          );
        })}
      </styles.TilesContainer>
      <Graphs />
    </styles.Container>
  );
};

export default Dashboard;
