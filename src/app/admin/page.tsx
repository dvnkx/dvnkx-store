import { formatCurrency, formatNumber } from "@/lib/formatters";
import React from "react";
import {
  getSalesData,
  getUserData,
  getProductData,
} from "./_actions/dashboard.actions";
import Grid from "@/components/Grid";
import DashboardCard from "./_components/DashboardCard";

const AdminDashboard = async () => {
  const [salesData, userData, productData] = await Promise.all([
    getSalesData(),
    getUserData(),
    getProductData(),
  ]);

  return (
    <Grid>
      <DashboardCard
        title="Sales"
        subtitle={`${formatNumber(salesData.numberOfSales)} Orders`}
        body={formatCurrency(salesData.amount)}
      />
      <DashboardCard
        title="Customers"
        subtitle={`${formatCurrency(
          userData.averageValuePerUser
        )} Average Value`}
        body={`${formatNumber(userData.userCount)}`}
      />
      <DashboardCard
        title="Active Products"
        subtitle={`${formatNumber(productData.inactiveCount)} Inactive`}
        body={`${formatNumber(productData.activeCount)}`}
      />
    </Grid>
  );
};

export default AdminDashboard;
