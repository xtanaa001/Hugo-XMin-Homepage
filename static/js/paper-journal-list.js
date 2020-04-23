var papers_journal = new Array (

    {
        id : "unified_POMACS",
        name : "Mechanism Design for Online Resource Allocation: A Unified Approach",
        coauthors : new Array(authorList.XQTan, authorList.BSun, authorList.Garcia, authorList.YWu, authorList.DHKTsang),
        journal : "Proceedings of the ACM on Measurement and Analysis of Computing Systems",
        //pubinfo: "in press",
        pubinfo: "vol. 4, no. 2, June 2020 (in press)",
        arxiv: "https://arxiv.org/abs/2004.09640",
        highlight : "yes",
        topic: "mechanism",
        note: "Conference version was accepted to ACM Sigmetrics 2020 as a full paper",
        paperAbstract : "<p>This paper concerns the mechanism design for online resource allocation in a strategic setting.  In this setting, a single supplier allocates capacity-limited resources to requests that arrive in a sequential and arbitrary manner. Each request is associated with an agent who may act selfishly to misreport the requirement and valuation of her request. The supplier charges payment from agents whose requests are satisfied, but incurs a load-dependent supply cost. The goal is to design an incentive compatible  online mechanism, which determines not only the resource allocation of each request, but also the payment of each agent,  so as to (approximately) maximize  the social welfare (i.e., aggregate valuations minus supply cost). We study this problem under the framework of competitive analysis. The major contribution of this paper is the development of a unified approach that achieves the best-possible competitive ratios for setups with different supply costs. Specifically, we show that when there is no supply cost or the supply cost function is linear, our model is essentially a standard 0-1 knapsack problem, for which our approach achieves logarithmic competitive ratios that match the state-of-the-art (which is optimal). For the more challenging setup when the supply cost is  strictly-convex, we provide online mechanisms, for the first time, that lead to the optimal competitive ratios as well.  To the best of our knowledge, this is the first approach that unifies the characterization of optimal competitive ratios in online resource allocation for different setups including zero, linear and strictly-convex supply costs.</p>",
    },

    {
        id : "OCA_JSAC_2020",
        name : "Online Combinatorial Auctions for Resource Allocation with Supply Costs and Capacity Limits",
        coauthors : new Array(authorList.XQTan, authorList.YWu, authorList.Garcia, authorList.DHKTsang),
        journal : "IEEE Journal of Selected Areas in Communications",
        pubinfo: "in press",
        pdf: "/documents/OCA_JSAC_2020.pdf",
        confVersion: "https://www.sigmetrics.org/mama/abstracts/Tan.pdf",
        //report: "",
        highlight : "yes",
        topic: "mechanism",
        paperAbstract : "<p> We study a general online combinatorial auction problem in algorithmic mechanism design. A provider allocates multiple types of capacity-limited resources to customers that arrive in a sequential and arbitrary manner. Each customer has a private valuation function on bundles of resources that she can purchase (e.g., a combination of different resources such as CPU and RAM in cloud computing). The provider charges payment from customers who purchase a bundle of resources and incurs an increasing supply cost with respect to the totality of resources allocated. The goal is to maximize the social welfare, namely, the total valuation of customers for their purchased bundles, minus the total supply cost of the provider for all the resources that have been allocated. We adopt the competitive analysis framework and provide posted-price mechanisms with optimal competitive ratios. Our pricing mechanism is optimal in the sense that no other online algorithms can achieve a better competitive ratio. We validate the theoretic results via empirical studies of online resource allocation in cloud computing. Our numerical results demonstrate that the proposed pricing mechanism is competitive and robust against system uncertainties and outperforms existing benchmarks.</p>",
    },

    {
        id : "PPR_JSAC_2020",
        name : "Posted-Price Retailing of Transactive Energy: An Optimal Online Mechanism without Prediction",
        coauthors : new Array(authorList.XQTan, authorList.YWu, authorList.Garcia, authorList.DHKTsang),
        journal : "IEEE Journal of Selected Areas in Communications",
        pubinfo: "vol. 38, no. 1, pp. 5-16, Jan. 2020",
        pdf: "/documents/PPR_JSAC_2020.pdf",
        //report: "",
        highlight : "yes",
        topic: "energy",
        paperAbstract : "<p>In this paper, we study a general transactive energy (TE) retailing problem in smart grids: a TE retailer (e.g., a utility company) publishes the energy price, which may vary over time. TE customers arrive in an arbitrary manner and may choose to either purchase a certain amount of energy based on the posted price, or leave without buying. Typical examples of such a setup include a transactive electric vehicle charging platform, or a general market-based demand-side management program, etc. We consider the setting where the customer arrival information is unknown (i.e., without prediction), and focus on maximizing the social welfare of the TE system through a posted-price mechanism (PPM) that runs in an online fashion with causal information only. We quantify the performance of the proposed PPM in the competitive analysis framework, and show that our proposed PPM is optimal in the sense that no other online mechanisms can achieve a better competitive ratio. We evaluate our theoretic results for the case of transactive electric vehicle charging. Our extensive experimental results show that the proposed PPM is competitive and robust against system uncertainties, and outperforms several existing benchmarks.</p>",
    },
	
	
    {
        id : "MDF_mechanism_TPS",
        name : "Eliciting Multi-dimensional Flexibility from Electric Vehicles: A Mechanism Design Approach",
        coauthors : new Array(authorList.BSun, authorList.XQTan, authorList.DHKTsang),
        journal : "IEEE Transactions on Power Systems",
        pubinfo: "vol. 34, no. 5, pp. 4038–4047, Setp. 2019",
        pdf: "/documents/MDF_mechanism_TPS.pdf",
        highlight : "no",
        topic: "energy",
        paperAbstract : "<p>Electric vehicles (EVs) have been well recognized as a deferrable load with the flexibility to shift their energy demands over time. Although this one-dimensional flexibility has been extensively investigated both by research and industrial implementations, the expanding energy demand and the associated uncertainties still make the integration of a large population of EVs into power system reliably and economically greatly challenging. In this paper, we design an auction scheme via mechanism design to elicit two additional flexibilities from EVs, namely energy flexibility and deadline flexibility. An offline mechanism is firstly designed as a benchmark based on the famous Vickrey–Clark– Groves mechanism. Then based on the primal-dual approach, we propose an online auction, in which all bids are truthful, the loss of social welfare is bounded by competitive ratio, and the mechanism can be implemented in polynomial time. By the numerical results, we quantitatively show that both the power system operators and individual EVs can benefit from the integration of the multi-dimensional flexibilities through our proposed mechanisms.</p>",
    },
    
    {
        id : "bcs_scheduling_ev_tsg",
        name : "Optimal Scheduling of Battery Charging Stations Serving Electric Vehicles Based on Battery Swapping",
        coauthors : new Array(authorList.XQTan, authorList.GQu, authorList.BSun, authorList.NLi, authorList.DHKTsang),
        journal : "IEEE Transactions on Smart Grid",
        pubinfo: "vol. 10, no. 2, pp. 1372-1384, March 2019",
        pdf: "/documents/bcs_scheduling_ev_tsg.pdf",
        highlight : "no",
        paperAbstract : "<p>A battery charging station (BCS) is a charging facility that supplies electric energy for recharging electric vehicles’ depleted batteries (DBs). A BCS has a certain number of charging bays and maintains a dynamic inventory of fully charged batteries (FBs). This paper studies a BCS scheduling (BCSS) problem whose target is to schedule the charging processes of the charging bays such that the charging cost is minimized while satisfying the FB demand. Specifically, the BCSS problem has two types of operations: 1) loading DBs into the charging bays and then unloading them to the FB inventory when they are fully charged and 2) controlling the charging rate of each charging bay. We formulate the BCSS problem as a mixed-integer program with quadratic battery degradation cost. A generalized benders decomposition algorithm is then developed to solve the problem efficiently. The salience of the developed algorithm is that: 1) each charging bay can solve its own subproblem separately and 2) each subproblem can be further partitioned into multiple independent and identically structured quadratic programming problems, and thus the algorithm facilitates an efficient parallel implementation. We perform extensive real data simulation to validate the optimization model and demonstrate the efficiency of the proposed algorithm.</p>",
    },

    {
        id : "operation_BSCS_QoS",
        name : "Optimal Charging Operation of Battery Swapping and Charging Stations with QoS Guarantee",
        coauthors : new Array(authorList.BSun, authorList.XQTan, authorList.DHKTsang),
        journal : "IEEE Transactions on Smart Grid",
        pubinfo: "vol. 9, no. 5, pp. 4689-4701, Sept. 2018",
        pdf: "/documents/operation_BSCS_QoS.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        paperAbstract : "<p>Motivated by the urgent demand for the electric vehicle (EV) fast refueling technologies, battery swapping and charging stations (BSCSs) are envisioned as a promising solution to provide timely EV refueling services. However, inappropriate battery charging operation in BSCSs cannot only incur unnecessary high charging cost but also threaten the reliability of the power grid. In this paper, we aim at obtaining an optimal charging operation policy for a single BSCS to minimize its charging cost while ensuring its quality-of-service. Leveraging the novel queueing network model, we propose to formulate the charging operation problem as a constrained Markov decision process and derive the optimal policy by the standard Lagrangian method and dynamic programming. To avoid the curse of dimensionality in practical large-scale systems, we further analyze the structure of the optimal policy and transform the dynamic programming procedure into an equivalent threshold optimization problem with a discrete separable convex objective function. Numerical results validate our theoretical analysis and the computational efficiency of our proposed algorithms. This paper also shows the impact of the system parameters (e.g., numbers of batteries and chargers) on the average cost under the optimal charging policy, which gives rich insights into the infrastructure planning of future BSCS networks.</p>",
    },
	
    {
        id : "yuan_SDRM_net",
        name : "Secrecy-Driven Resource Management for Vehicular Computation-Ofﬂoading Networks",
        coauthors : new Array(authorList.YWu, authorList.LQian, authorList.HMao, authorList.XYang, authorList.HZhou, authorList.XQTan, authorList.DHKTsang),
        journal : "IEEE Network",
        pubinfo: "vol. 32, no. 3, pp. 84-91, June 2018",
        pdf: "/documents/yuan_SDRM_net.pdf",
        highlight : "no",
        paperAbstract : "<p>The growing developments in vehicular networks and vehicular Internet services have yielded a variety of computation-intensive applications, resulting in great pressure on vehicles equipped with limited computation resources. The cloud/ edge-based service, which enables in-motion vehicles to actively offload computation tasks to cloud/edge servers, has provided a promising approach to address the intensive computation burden. However, due to the possibility of disclosing private data, offloading computation tasks suffers from potential eavesdropping attacks. In this article, we focus on the eavesdropping attack when vehicular users (VUs) deliver computation tasks to cloud/edge servers over radio frequency channels. We take the tool of physical layer security and investigate resource management for secrecy provisioning when the VUs offload computation tasks. We then discuss three promising technologies, including non-orthogonal multiple access, multi-access assisted computation offloading, and mobility- and delay-aware offloading, which facilitate the enhancement of secrecy against the eavesdropping attack. Finally, as a detailed example of the multi-access assisted computation offloading, we present a case study on the optimal dual-connectivity-assisted computation task offloading with secrecy provisioning and show the performance of the proposed computation offloading.</p>",
    },
    
    {
        id : "sareh_contract_tii",
        name : "Contract Design for Aggregating, Trading, and Distributing Reserves in Demand-side Frequency Regulation",
        coauthors : new Array(authorList.Sareh, authorList.XQTan, authorList.BSun, authorList.DHKTsang),
        journal : "IEEE Transactions on Industrial Informatics",
        pubinfo: "vol. 14, no. 6, pp. 2539-2549, June 2018",
        pdf: "/documents/sareh_contract_tii.pdf",
        highlight : "no",
        paperAbstract : "<p>With the integration of renewable energy sources to the power grid, the volatility of supply in the system will increase. Consequently, the mismatch between the power supply and demand may happen frequently and, thus, lead to frequency deviation from its nominal value. To avoid this scenario, demand-side flexibility has been widely considered to provide frequency regulation services. In this paper, we focus on the flexibility of thermal systems in buildings and propose a hierarchical demand-response market with a three-step algorithm to model the interactions among three entities: the independent system operators (ISOs), aggregators, and end users. The flexibility from the end users is aggregated in step 1, which is based on the incentive and electricity prices broadcasted by the aggregator. A robust optimization approach is adopted to improve the user’s decision under the electricity price uncertainty. To model the interaction between the ISO and aggregators in step 2, a bilevel optimization problem is solved, in which the ISO seeks to minimize its cost, while the aggregators maximize their benefits in the day-ahead market. In step 3, each aggregator allocates its successful trading reserve among end users based on their performance scores.</p>",
    },
    
	{
        id : "bscs_queuing_pe",
        name : "Asymptotic Performance Evaluation of Battery Swapping and Charging Station for Electric Vehicles",
        coauthors : new Array(authorList.XQTan, authorList.BSun, authorList.YWu, authorList.DHKTsang),
        journal : "Performance Evaluation (Elsevier)",
        pubinfo: "vol. 119, pp. 43-57, March 2018",
        pdf: "/documents/bscs_queuing_pe.pdf",
        arxiv : "https://arxiv.org/abs/1707.07175",
        highlight : "no",
        note: "Appeared in the list of \"Most Downloaded Performance Evaluation Paper\" ",
        paperAbstract : "<p>A battery swapping and charging station (BSCS) is an energy refueling station, where (i) electric vehicles (EVs) with depleted batteries (DBs) can swap their DBs for fully-charged ones, and (ii) the swapped DBs are then charged until they are fully-charged. Successful deployment of a BSCS system necessitates a careful planning of swapping- and chargingrelated infrastructures, and thus a comprehensive performance evaluation of the BSCS is becoming crucial. This paper studies such a performance evaluation problem with a novel mixed queueing network (MQN) model and validates this model with extensive numerical simulation. We adopt the EVs’ blocking probability as our quality-of-service measure and focus on studying the impact of the key parameters of the BSCS (e.g., the numbers of parking spaces, swapping islands, chargers, and batteries) on the blocking probability. We prove a necessary and sufficient condition for showing the ergodicity of the MQN when the number of batteries approaches infinity, and further prove that the blocking probability has two different types of asymptotic behaviors. Meanwhile, for each type of asymptotic behavior, we analytically derive the asymptotic lower bound of the blocking probability.</p>",
    },

    {
        id : "jason_bcs_iet",
        name : "Optimal Power Dispatch of a Centralized Electric Vehicle Battery Charging Station with Renewables",
        coauthors : new Array(authorList.JWLi, authorList.XQTan, authorList.BSun, authorList.DHKTsang),
        journal : "IET Communications",
        pubinfo: "vol. 12, no. 5, pp. 579-585, March 2018",
        pdf: "/documents/jason_bcs_iet.pdf",
        highlight : "no",
        paperAbstract : "<p>Historically, transportation electrification has been largely hindered by the limited battery capacity and the long charging time. Battery swapping has emerged as one promising technology to mitigate these problems. A centralised battery charging station (BCS) is responsible for charging depleted batteries (DBs) and providing fully-charged batteries (FBs) for multiple geographically-distributed battery swapping stations (BSSs) so that they can carry out battery swapping services. Facilitated by the recent advancement in sensor and communication technologies, one salient advantage of this centralised approach lies in its convenience to better utilise dual energy sources (i.e. the traditional power grid and local renewable energy generators). This is achieved via optimising the charging processes of a large number of DBs. In this study, the authors propose an optimisation framework for a centralised BCS to minimise the energy cost from the dual energy sources to satisfy the FB demands from multiple BSSs. Particularly, the power dispatch problem in the day-ahead and real-time electricity markets is formulated as a two-stage stochastic optimisation through consideration of the intermittent renewable energy. Numerical simulations show that the proposed optimised power dispatch is capable of achieving cost saving of 76% compared with the benchmark, subject to the limited information available in day-ahead.</p>",
    },

    {
        id : "distributed_MG_IJEPES",
        name : "Energy Management of Cooperative Microgrids: A Distributed Optimization Approach",
        coauthors : new Array(authorList.TLiu, authorList.XQTan, authorList.BSun, authorList.YWu, authorList.DHKTsang),
        journal : "International Journal of Electrical Power and Energy Systems",
        pubinfo: "vol. 96, pp. 335-346, March 2018",
        pdf: "/documents/distributed_MG_IJEPES.pdf",
        highlight : "no",
        paperAbstract : "<p>The cooperation of multiple networked microgrids (MGs) can alleviate the mismatch problem between distributed generation and demand and reduce the overall cost of the power system. Energy management with direct energy exchange among MGs is a promising approach for improving energy efficiency. However, existing methods on microgrid cooperation usually overlook the underlying distribution network with operating constraints (e.g., voltage tolerance and power flow constraints). Hence the results may not be applicable to actual systems. This paper studies the energy management problem of multiple MGs that are interconnected by both the direct current (DC) energy exchange network and the alternating current (AC) traditional distribution networks. In our problem, each MG is equipped with renewable energy generators as well as distributed storage devices. In order to handle the non-convex power flow constraints, we exploit the recent results of the exact optimal power flow (OPF) relaxation method which can equivalently transform the original non-convex problem into a second-order cone programming problem and efficiently determine the optimal solution successfully. The objective of our problem is to minimize the overall energy cost in a distribution network consisting of multiple MGs, with the practical operating constraints (e.g., power balance and the battery’s operational constraints) explicitly incorporated. Considering the privacy and scalability, we propose a distributed algorithm with convergence assurance based on the alternating direction method of multipliers (ADMM). We also implement our method based on the model predictive control (MPC) approach in order to handle the forecasting errors of the renewable energy generation. Simulations are made for different MG exchange topologies on three radial distribution network testbeds. Numerical results demonstrate that certain topologies are more favorable than others, and the cooperation strategy for the energy exchange is significantly affected by the MGs’ locations in the distribution network.</p>",
    },


    {
        id : "ev_discrete_charging_tsg",
        name : "Optimal Scheduling for Electric Vehicle Charging with Discrete Charging Levels in Distribution Grid",
        coauthors : new Array(authorList.BSun, authorList.XQTan, authorList.YWu, authorList.DHKTsang),
        journal : "IEEE Transactions on Smart Grid",
        pubinfo: "vol. 9, no. 2, pp. 624-634, March 2018",
        pdf: "/documents/ev_discrete_charging_tsg.pdf",
        highlight : "no",
        paperAbstract : "<p>To accommodate the increasing electric vehicle (EV) penetration in distribution grid, coordinated EV charging has been extensively studied in the literature. However, most of the existing works optimistically consider the EV charging rate as a continuous variable and implicitly ignore the capacity limitation in distribution transformers, which both have great impact on the efficiency and stability of practical grid operation. Towards a more realistic setting, this paper formulates the EV coordinated discrete charging problem as two successive binary programs. The first one is designed to achieve a desired aggregate load profile (e.g., valley-filling profile) at the distribution grid level while taking into account the capacity constraints of distribution transformers. Leveraging the properties of separable convex function and total unimodularity, the problem is transformed into an equivalent linear program, which can be solved efficiently and optimally. The second problem aims to minimize the total number of on-off switchings of all the EVs’ charging profiles while preserving the optimality of the former problem. We prove the second problem is NP-hard and propose a heuristic algorithm to approximately achieve our target in an iterative manner. Case studies confirm the validity of our proposed scheduling methods and indicate our algorithm’s potential for real-time implementations.</p>",
    },
    
    
    {
        id : "ssp_bess_tsg",
        name : "A Stochastic Shortest Path Framework for Quantifying the Value and Lifetime of Battery Energy Storage under Dynamic Pricing",
        coauthors : new Array(authorList.XQTan, authorList.YWu, authorList.DHKTsang),
        journal : "IEEE Transactions on Smart Grid",
        pubinfo: "vol. 8, no. 2, pp. 769-778, March 2017",
        pdf: "/documents/ssp_bess_tsg.pdf",
        //arxiv : "https://arxiv.org/abs/1912.05770",
        highlight : "no",
        paperAbstract : "<p>This paper aims at quantifying the value of a lifetime-constrained battery energy storage system (BESS) operated by a consumer who faces fluctuating electricity prices. We define the lifetime of the BESS as the serving duration within which the BESSs capacity stays above a certain threshold of its initial capacity and define the value of the BESS as the total peakshaving value within its entire lifetime. Under the assumption that the price dynamics are Markovian, we show that maximizing the average value of the BESS can be formulated as a stochastic shortest path (SSP) problem, and the average lifetime corresponds to the average number of steps before being absorbed in the SSP problem. We propose an efficient parallel value iteration algorithm to solve the proposed SSP problem with guarantees of achieving optimality and a fast convergence. We also derive a closed form expression for the average lifetime based on the principle of an embedded absorbing Markov chain. We validate our model and algorithm on a practical BESS via real price data sets from two different markets. Comparison of the computational efficiency between the standard Gauss–Seidel value iteration and our parallel algorithm is also illustrated through extensive simulation.</p>",
    },
    
    
	{
        id : "pareto_bess_tpds",
        name : "Pareto Optimal Operation of Distributed Battery Energy Storage Systems for Energy Arbitrage under Dynamic Pricing",
        coauthors : new Array(authorList.XQTan, authorList.YWu, authorList.DHKTsang),
        journal : "IEEE Transactions on Parallel and Distributed Systems",
        pubinfo: "vol. 27, no. 7, pp. 2103-2115, July 2016",
        pdf: "/documents/pareto_bess_tpds.pdf",
        highlight : "no",
        paperAbstract : "<p>The optimal operation of a distributed battery energy storage system (BESS) for energy arbitrage under dynamic pricing is studied in this paper, and the Pareto optimal arbitrage policy that balances the economic value and lifetime tradeoff of the BESSis obtained. Specifically, the lifetime performance of the BESS is represented by its average lifetime, i.e., the average operational duration within which its capacity stays above a certain threshold, and the value performance of the BESS is defined as the total average arbitrage value within its entire lifetime. We propose a constrained stochastic shortest path (CSSP) model to characterize the optimal value-lifetime performance pair. By exploiting the hidden structure of this CSSP problem, an efficient parallel algorithm is proposed to compute the optimal policy. We further prove the condition under which the optimal policy is Pareto optimal. This implies that the achievable optimal value-lifetime performance pair is globally optimal as long as the system-wide utility is monotonically increasing in both the value performance and the lifetime performance. We validate our proposed model and algorithm via real battery specifications and electricity market data, and the results show promising insights for both infrastructure planning and operational management of BESSs in practice.</p>",
    },

    {
        id : "pricing_hybrid_market_tii",
        name : "Optimal Pricing and Energy Scheduling for Hybrid Energy Trading Market in Future Smart Grid",
        coauthors : new Array(authorList.YWu, authorList.XQTan, authorList.LQian, authorList.DHKTsang),
        journal : "IEEE Transactions on Industrial Informatics",
        pubinfo: "vol. 11, no. 6, pp. 1585-1596, Dec. 2015",
        pdf: "/documents/pricing_hybrid_market_tii.pdf",
        highlight : "no",
        paperAbstract : "<p>Future smart grid (SG) has been considered a complex and advanced power system, where energy consumers are connected not only to the traditional energy retailers (e.g., the utility companies), but also to some local energy networks for bidirectional energy trading opportunities. This paper aims to investigate a hybrid energy trading market that is comprised of an external utility company and a local trading market managed by a local trading center (LTC). The existence of local energy market provides new opportunities for the energy consumers and the distributed energy sellers to perform the local energy trading in a cooperative manner such that they all can benefit. This paper first quantifies the respective benefits of the energy consumers and the sellers from the local trading and then investigates how they can optimize their benefits by controlling their energy scheduling in response to the LTC’s pricing. Two different types of the LTC are considered: 1) the nonprofit-oriented LTC, which solely aims at benefiting the energy consumers and the sellers; and 2) the profit-oriented LTC, which aims at maximizing its own profit while guaranteeing the required benefit for each consumer and seller. For each type of the LTC, the optimal trading problem is formulated and the associated algorithm is further proposed to efficiently find the LTC’s optimal price, as well as the optimal energy scheduling for each consumer and seller. Numerical results are provided to validate the benefits of the hybrid energy trading market and the performance of the proposed algorithms.</p>",
    },
    
    {
        id : "downlink_scheduling_monet",
        name : "Optimal Downlink Scheduling for Heterogeneous Traffic in LET-A Based on MDP and Chance-Constrained Approaches",
        coauthors : new Array(authorList.Niafar, authorList.XQTan, authorList.DHKTsang),
        journal : "ACM Springer Mobile Networks and Applications (MONET) Journal",
        pubinfo: "September 2015",
        pdf: "/documents/downlink_scheduling_monet.pdf",
        highlight : "no",
        paperAbstract : "<p>The current mobile broadband market experiences major growth in data demand and average revenue loss. To remain profitable from the perspective of a service provider (SP), one needs to maximize revenue as much as possible by making subscribers satisfied within the limited budget. On the other hand, traffic demands are moving toward supporting the wide range of heterogeneous applications with different quality of service (QoS) requirements. In this paper, we consider two related packet scheduling problems, i.e., long-term and short-term approaches in the 4th generation partnership project (3GPP) long term evolution-advanced (LTE-A) system. In the longterm approach, the long-term average revenue of SP subject to the long-term QoS constraints for heterogeneous traffic demands is optimized. The problem is first formulated as a constrained Markov decision process (CMDP) problem, of which the optimal control policy is achieved by utilizing the channel and queue information simultaneously. Subsequently, in the short-term approach, we consider the short-term revenue optimization problem which stochastically guarantees the short-term QoS for heterogeneous traffic demands through a set of chance constraints. To make the proposed chance-constrained programming problem computationally tractable, we use the Bernstein approximation technique to analytically approximate the chance constraint as a convex conservative constraint. Finally, the proposed packet scheduling schemes and solution methods are validated via numerical simulations.</p>",
    },

);