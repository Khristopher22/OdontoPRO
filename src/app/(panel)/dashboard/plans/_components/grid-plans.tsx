import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { subscriptionPlans } from "@/utils/plans/index"
import { SubscriptionButton } from "./subscription-button"


export function GridPlans() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
      {subscriptionPlans.map((plan, index) => (
        <Card
          key={plan.id}
          className={`flex flex-col w-full mx-auto ${index === 1 ? "border-cyan-500 overflow-hidden" : ""}`}
        >

          {index === 1 && (
            <div
              className=" bg-cyan-500 text-center py-3"
              style={{ marginTop: 'calc(-1rem - 10px)' }}
            >
              <p className="font-semibold text-white">PROMOÇÃO EXCLUSIVA</p>
            </div>
          )}

          <CardHeader className="p-4">
            <CardTitle className="text-xl md:text-2xl">
              {plan.name}
            </CardTitle>
            <CardDescription>
              {plan.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="p-4">
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index} className="text-sm md:text-base">
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <p className="text-gray-600 line-through">{plan.oldPrice}</p>
              <p className="text-black text-2xl font-bold">{plan.price}</p>
            </div>
          </CardContent>

          <CardFooter className="p-6">
            <SubscriptionButton
              type={plan.id === "BASIC" ? "BASIC" : "PROFESSIONAL"}
            />
          </CardFooter>
        </Card>
      ))}
    </section>

  )
}