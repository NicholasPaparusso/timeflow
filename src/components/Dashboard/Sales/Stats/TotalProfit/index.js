"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, Box, Typography } from "@mui/material";

const TotalProfit = () => {
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Profit",
      data: [3, 5, 10, 5, 9, 7, 15],
    },
  ];

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#3584FC"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
      borderColor: "#ECEEF2",
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      labels: {
        show: false,
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      // tickAmount: 6,
      show: false,
      // max: 150,
      // min: 0,
      labels: {
        formatter: (val) => {
          return "$" + val + "K";
        },

        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
    },
    legend: {
      show: false,
      position: "top",
      fontSize: "12px",
      horizontalAlign: "left",
      itemMargin: {
        horizontal: 8,
        vertical: 0,
      },
      labels: {
        colors: "#64748B",
      },
      markers: {
        size: 7,
        offsetX: -2,
        offsetY: -0.5,
        shape: "diamond",
      },
    },
  };

  return (
    <>
      <Card
        sx={{
          position: "relative",
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          paddingTop: { xs: "18px", sm: "20px", lg: "25px" },
          paddingX: { xs: "18px", sm: "20px", lg: "25px" },
          paddingBottom: "65px",
        }}
        className="rmui-card border"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <Box
            sx={{
              bgcolor: "#DDE4FF",
              padding: "8px",
              borderRadius: "5px",
            }}
          >
            <Box
              sx={{
                bgcolor: "info.main",
                color: "#fff",
                textAlign: "center",
                width: "39px",
                height: "39px",
                lineHeight: "39px",
                borderRadius: "5px",
                fontSize: "25px",
              }}
            >
              <i className="ri-wallet-2-line"></i>
            </Box>
          </Box>

          <Box>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "18px", lg: "24px" },
                fontWeight: 500,
              }}
              className="text-black"
            >
              $80,000
            </Typography>

            <Typography component="span" sx={{ mt: "2px", display: "block" }}>
              Total Profit
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            mt: "45px",
          }}
        >
          <Box
            sx={{
              bgcolor: "#ffc8c0",
              border: "1px solid #ffa294",
              color: "error.main",
              borderRadius: "100px",
              fontSize: "11px",
              padding: "1.5px 7px",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <i
              className="ri-arrow-down-fill"
              style={{
                fontSize: "14px",
                flexShrink: "0",
                lineHeight: "0",
              }}
            ></i>
            7%
          </Box>

          <Typography
            component="span"
            sx={{ fontSize: "12px", display: "block" }}
          >
            from last week
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            left: "0",
            right: "0",
            bottom: "-30px",
            ml: "-12px",
            mr: "-10px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="area"
              height={120}
              width={"100%"}
            />
          )}
        </Box>
      </Card>
    </>
  );
};

export default TotalProfit;
